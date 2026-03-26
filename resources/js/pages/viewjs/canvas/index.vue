<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Head, /*Link,*/ useForm, router, /* usePage */ } from '@inertiajs/vue3';
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { LocateFixed, UtilityPole, Gauge, FileClock, Search, RefreshCw, ScanEye, ArrowDownToLine, GitPullRequestCreate } from 'lucide-vue-next';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue'
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import canvas from '@/routes/canvas'
import type { BreadcrumbItem as bc } from '@/types';
import mem from '@/extra/mem.js';

// Start of other import

const breadcrumbs: bc[] = [
    {
        title: 'Canvas Manipulator',
        href: dashboard().url,
    },
];
const headTitle = 'Canvas Manipulator';

// Refs and Variable Area
const loading = ref(false);

import { markRaw } from 'vue';
import * as fabric from 'fabric'; // Using fabric v6
const canvasRef = ref(null);
const fabricCanvas = ref(null);
// on page loaded
onMounted(() => {
    // Initialize fabric canvas
    fabricCanvas.value = markRaw(new fabric.Canvas(canvasRef.value, {
        backgroundColor: '#111',
    }));

    // Add a sample shape
    const rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 60,
        fill: 'red',
    });
    fabricCanvas.value.add(rect);
});

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

const fileChange = (event) => {
    blobToBase64(event.target.files[0]).then(base64URL => {
        fabric.Image.fromURL(base64URL).then(img => {
            const ctx = fabricCanvas.value.getContext("2d");
            ctx.filter = 'brightness(80%) saturate(0%) contrast(500%)';
            img.scale(0.4);
            img.set({
                left: 320,
                top: 100,
                angle: 0,
                opacity: 1
            });
            fabricCanvas.value.add(img);
            fabricCanvas.value.renderAll();

            // INITIALIZE form when opening new picture
            form.value.license = "";
            form.value.expiry = "";
            form.value.name = "";
            form.value.address = "";
            form.value.birthday = "";
            form.value.nationality = "";
            form.value.sex = "";
            form.value.image_file = null;
        }); // Optional settings;
    });
}


import { Vue3OcrPhDriverLicenseParser } from 'vue3-ocr-ph-driver-license-parser';
const parser1 = ref();
const textOutput = ref();
const imageDOM = ref();
const imgURL1 = ref();
const progress = ref(0);
const open = ref(false);
const progressing = ref(false);
const eventDateRef = ref(new Date())

const handleProgress = (event) => {
    progress.value = event;
}
const handleParse = (event) => {
    console.log("output ng laravel...........");
    console.log("output ng laravel...........", event);
    progressing.value = false;// show prrogress bar
    handleProcessEnd();
    form.value.license = event.license_id;
    form.value.expiry = event.dateexpirydate;
    form.value.name = event.name;
    form.value.address = event.address;
    form.value.birthday = event.birthDate;
    form.value.nationality = event.nationality;
    form.value.sex = event.sex;
}

const handleScanning = () => {
    canvasRef.value.toBlob(blob => {
        // canvas to blob file conversion
        const file = new File([blob], "fileName.jpg", { type: "image/jpeg" });
        // read image file OCR
        parser1.value.openFile(file);
    }, 'image/jpeg');
    progressing.value = true;// show prrogress bar
}

//-----------------------------------------------------

import { ToastAction, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from 'reka-ui'

function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date)
}

// Trigger this function when process ends
function handleProcessEnd() {
    open.value = true
    setTimeout(() => { open.value = false }, 3000) // Auto-dismiss
}

const form = ref({
    license: "",
    expirydate: "",
    name: "",
    address: "",
    birthday: "",
    nationality: "",
    sex: "xxxxx",
    image_file: null,
});

//const form = ref(null);
// register global variables
mem.register("mem_LicenseFormData2", form);

// form submit

const submit = async () => {
    // initialize Form_data for posting
    const form_data = useForm(form.value);
    // convert first the base64 images to blob file before transport
    const base64Response = await fetch(form.value.image_file);
    form_data.image_file = await base64Response.blob();
    // posting form_data to backend database
    //form_data.post(post_complaint().url, {
    //    preserveScroll: true,
    //});
};

</script>

<template>

    <Head v-bind:title="headTitle" />
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" class="relative border-0 text-white bg-neutral-950 rounded-none overflow-y-auto">
            <div class="absolute top-0 h-[100%] w-full bg-neutral-150 ">
                <div class="flex flex-col w-full h-[100%]  text-white px-4 py-3 gap-2">
                    <div class="z-150 h-[35px] w-full" />
                    <div class="flex-1 z-0 w-[100%] overflow-auto">
                        <!-- Main Content Start -->

                        <ProgressRoot :model-value="progress" v-show="progressing"
                            class="rounded-full relative h-4 w-[300px] overflow-hidden bg-white dark:bg-stone-950 border border-muted">
                            <ProgressIndicator
                                class="indicator rounded-full block relative w-full h-4 bg-grass9 transition-transform overflow-hidden duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] after:animate-progress after:content-[''] after:absolute after:inset-0  after:bg-[linear-gradient(-45deg,_rgba(255,255,255,0.2)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.2)_50%,_rgba(255,255,255,0.2)_75%,_transparent_75%,_transparent)] after:bg-[length:30px_30px]"
                                :style="`transform: translateX(-${100 - progress}%)`" />
                        </ProgressRoot>
                        <div class="flex flex-row w-[100%] ">
                            <Button disabled
                                class=" text-white border border-green-900 w-[50px] h-[40px] rounded-none rounded-tl-lg bg-slate-600">
                                <GitPullRequestCreate />
                            </Button>
                            <Input class=" border border-green-900 rounded-none w-[100%] md:w-[650px]" type="file"
                                accept="image/*" @change="fileChange"></Input>
                            <Button
                                class=" hover:shadow-md w-[100px] md:flex-grow h-[40px] hover:shadow-slate-400 rounded-none rounded-tr-lg"
                                @Click="handleScanning">
                                <ScanEye />&nbsp;
                                <span class="hidden xl:block">
                                    Scan Image
                                    To
                                    Get ID Data
                                </span>
                            </Button>
                        </div>

                        <div class="flex flex-col md:flex-row gap-1 w-[100%] ">
                            <div v-show="!form.image_file"
                                class="w-full md:w-3/4 overflow-hidden border border-green-900">
                                <canvas ref="canvasRef" height="600" width="800" class="!w-[100%] "></canvas>
                            </div>
                            <div v-if="form.image_file"
                                class=" w-[100%] md:w-3/4 overflow-hidden border border-green-900">
                                <img class="w-full h-full object-cover object-center" :src="form.image_file" />
                            </div>
                            <form @submit.prevent="submit"
                                class="flex-grow space-y-6 rounded-none border border-green-900">
                                <div class=" flex-auto flex flex-col gap-4 p-4">
                                    <div>
                                        <Label class="mb-2">License No</Label>
                                        <Input class="text-green-300" type="text" v-model="form.license" name="license"
                                            id="license"></Input>
                                    </div>
                                    <div>
                                        <Label class="mb-2">Expiry Date</Label>
                                        <Input class="text-green-300" type="text" v-model="form.expirydate"
                                            name="expirydate" id="expirydate"></Input>
                                    </div>
                                    <div>
                                        <Label class="mb-2">Name</Label>
                                        <Input class="text-green-300" type="text" v-model="form.name" name="name"
                                            id="name"></Input>
                                    </div>
                                    <div>
                                        <Label class="mb-2">Address</Label>
                                        <Input class="text-green-300" type="text" v-model="form.address" name="address"
                                            id="address"></Input>
                                    </div>
                                    <div>
                                        <Label class="mb-2">Birth Day</Label>
                                        <Input class="text-green-300" type="text" v-model="form.birthday"
                                            name="birthday" id="birthday"></Input>
                                    </div>
                                    <div class="flex flex-row gap-2">
                                        <div>
                                            <Label class="mb-2">Nationalilty</Label>
                                            <Input class="text-green-300" type="text" v-model="form.nationality"
                                                name="nationality" id="nationality"></Input>
                                        </div>
                                        <div>
                                            <Label class="mb-2">Sex</Label>
                                            <Input class="text-green-300" type="text" v-model="form.sex" name="sex"
                                                id="sex"></Input>
                                        </div>
                                    </div>
                                    <Button class="hover:shadow  hover:shadow-cyan-500">
                                        <ArrowDownToLine />
                                        Accept & Save
                                    </Button>
                                    <ToastProvider>
                                        <ToastRoot v-model:open="open"
                                            class="bg-white rounded-lg shadow-sm border p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut">
                                            <ToastTitle
                                                class="[grid-area:_title] mb-[5px] font-medium text-slate12 text-sm">
                                                Scanning: Successfull!
                                            </ToastTitle>
                                            <ToastDescription as-child>
                                                <time
                                                    class="[grid-area:_description] m-0 text-slate11 text-xs leading-[1.3]"
                                                    :dateTime="eventDateRef.toISOString()">
                                                    {{ prettyDate(eventDateRef) }}
                                                </time>
                                            </ToastDescription>
                                            <ToastAction class="[grid-area:_action]" as-child
                                                alt-text="Goto schedule to undo">
                                                <button
                                                    class="inline-flex items-center justify-center rounded-md font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                                                    Ok
                                                </button>
                                            </ToastAction>
                                        </ToastRoot>
                                        <ToastViewport
                                            class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
                                    </ToastProvider>
                                </div>
                            </form>
                        </div>

                        <div ref="textOutput">
                            <!-- Progress :model-value="progress" /-->
                        </div>
                        <img v-show="false" :src="imgURL1" ref="imageDOM" />
                        <Vue3OcrPhDriverLicenseParser ref="parser1" :textOutput="textOutput" :imageDOM="imageDOM"
                            @onProgress="handleProgress" @onParse="handleParse" />
                        <br><br>

                        <!-- Main Content Ended -->
                    </div>
                </div>
            </div>

            <!-- Header and Function Buttons Start -->
            <div class="absolute top-0 flex w-full h-12 px-4 overflow-hidden bottom-2 bg-gray-950">
                <div class="flex h-12 shrink-0 items-center gap-2 w-[100%]">
                    <div class="flex items-center gap-2 w-[100%]">
                        <SidebarTrigger class="-ml-1 text-white" />

                        <template v-if="breadcrumbs.length > 0">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <template v-for="(item, index) in breadcrumbs" :key="index">
                                        <BreadcrumbItem>
                                            <template v-if="index === breadcrumbs.length - 1">
                                                <BreadcrumbPage>{{ item.title }}</BreadcrumbPage>
                                            </template>
                                            <template v-else>
                                                <BreadcrumbLink :href="item.href">
                                                    {{ item.title }}
                                                </BreadcrumbLink>
                                            </template>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
                                    </template>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </template>

                        <!--  Additional Local Menu/Function Buttons-->
                        <div class="flex gap-2 ml-auto">
                            <!-- Menu Buttons in top left AppBar Start -->

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800"
                                            @click="router.visit(canvas.index().url, { method: 'get' })">
                                            <LocateFixed />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            where Am I?
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800"
                                            @click="router.visit(canvas.create().url, { method: 'get' })">
                                            <UtilityPole />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            Check out this Place ...
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800"
                                            @click="showAllCustomersHere()">
                                            <Gauge />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            Customers
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <TooltipProvider>
                                <TooltipRoot>
                                    <TooltipTrigger
                                        class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        <!-- Dialog Start -->
                                        <Dialog>
                                            <DialogTrigger as-child>
                                                <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800">
                                                    <FileClock />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Search History
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        Lists of past searches ...
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <!------------------------ BODY STARTS ----------------------------->
                                                <div
                                                    class="w-[100%] max-h-[300px] overflow-auto grid grid-flow-row-dense grid-cols-4 gap-2">

                                                    <div v-for="(searchkey) in searchList" :key="searchkey.id">
                                                        <div class="p-0 border bg-light rounded">
                                                            <DialogClose as-child>
                                                                <Button @click="searchkeyClick(searchkey.string_value)"
                                                                    class="bg-gray-900 text-blue-200 hover:bg-gray-800 flex-col p-3">
                                                                    <p><b>{{ searchkey.string_value }}</b></p>
                                                                    <span style="font-size: 10px;">
                                                                        {{ searchkey.data }}
                                                                    </span>
                                                                </Button>
                                                            </DialogClose>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!------------------------- BODY ENDS ----------------------------->
                                                <DialogFooter>
                                                    <Input class=" shadow-red-800" v-show="showConfirmDelete"
                                                        v-model="deleteAll"
                                                        placeholder='Type in "delete all" to confirm'></Input>
                                                    <Button variant="destructive" @click="confirmClearClick()">
                                                        Clear All
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <!-- Dialog Ended -->
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent
                                            class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            :side-offset="5">
                                            Search history
                                            <TooltipArrow class=" fill-slate-700" :width="8" />
                                        </TooltipContent>
                                    </TooltipPortal>
                                </TooltipRoot>
                            </TooltipProvider>

                            <!-- Dialog with Tooltip -->
                            <div class="flex ml-2">
                                <Button class=" rounded-2xl rounded-r-none bg-gray-900 text-blue-200 hover:bg-gray-800"
                                    @click="customerSearch()">
                                    <Search />
                                </Button>
                                <Input class=" rounded-l-none" placeholder="Search" />
                            </div>

                            <!-- Menu Buttons in top left AppBar Ended -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header and Function Buttons Ended -->
        </AppContent>
    </AppShell>
    <div v-show="loading" class="absolute top-0 flex w-full h-full bg-gray-950 z-6000 opacity-80 blur-2xl">
        <span class="m-auto animate-spin">
            <RefreshCw :size="250" />
        </span>
    </div>
</template>
