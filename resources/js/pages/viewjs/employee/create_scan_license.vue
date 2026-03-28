<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Head, /*Link,*/ useForm, router, /* usePage */ } from '@inertiajs/vue3';
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { LocateFixed, UtilityPole, Aperture, Camera, Search, RefreshCw, ScanEye, ArrowDownToLine, GitPullRequestCreate, ArrowRightFromLine, ArrowLeftFromLine } from 'lucide-vue-next';
import {
    Dialog,
    //DialogClose,
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
import employee from '@/routes/employee';
import type { BreadcrumbItem as bc } from '@/types';

// clear images from cache
localStorage.removeItem("employee/create2");
localStorage.removeItem("employee/create3");
localStorage.removeItem("employee/create4");
localStorage.removeItem("employee/create5");
localStorage.removeItem("employee/create6");
localStorage.removeItem("employee/create7");
localStorage.removeItem("employee/create8");
localStorage.clear();
// form.value initialization
const form = ref({
    //------------------------- local variaables
    imag_count: 0,
    id_count: 0,
    brightness: 50,
    scale: 50,
    //------------------------- From Migration
    license: "",
    expirydate: "",
    name: "",
    address: "",
    birthday: "",
    nationality: "",
    sex: "",
    id2_number: "",
    id2_type: "",
    id3_number: "",
    id3_type: "",
    image_emp_file1: null,
    image_emp_file2: null,
    image_emp_file3: null,
    image_emp_file4: null,
    image_id_file1: null,
    image_id_file2: null,
    image_id_file3: null,
});
const form2 = ref({
    image_emp_file1: null,
});
const form3 = ref({
    image_emp_file2: null,
});
const form4 = ref({
    image_emp_file3: null,
});
const form5 = ref({
    image_emp_file4: null,
});
const form6 = ref({
    image_id_file1: null,
});
const form7 = ref({
    image_id_file2: null,
});
const form8 = ref({
    image_id_file3: null,
});

// globalizing form.value as "employee/create"
import mem from '@/extra/mem.js';
mem.register("employee/create1", form);
mem.register("employee/create2", form2);
mem.register("employee/create3", form3);
mem.register("employee/create4", form4);
mem.register("employee/create5", form5);
mem.register("employee/create6", form6);
mem.register("employee/create7", form7);
mem.register("employee/create8", form8);

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

// Start of other import

const breadcrumbs: bc[] = [
    {
        title: 'Register Employee - Scan license',
        href: dashboard().url,
    },
];
const headTitle = 'Register Employee';

// Refs and Variable Area
const loading = ref(false);

import { markRaw } from 'vue';
import * as fabric from 'fabric'; // Using fabric v6
const canvasRef = ref(null);
const fabricCanvas = ref(null);

const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

const fileChange = (event) => {
    // convert blob file to base64
    form.value.image_id_file1 = event.target.files[0];
    blobToBase64(event.target.files[0]).then(base64URL => {
        form6.value.image_id_file1 = base64URL;
        fabric.Image.fromURL(form6.value.image_id_file1).then(img => {
            const ctx = fabricCanvas.value.getContext("2d");
            //ctx.filter = 'brightness(130%) saturate(0%) contrast(1000%)';
            ctx.filter = "brightness(" + (2 * form.value.brightness).toString() + "%) saturate(0%) contrast(500%)";
            img.set({
                left: 320,
                top: 300,
                angle: 0,
                opacity: 1,
                scaleX: 1.0 * (form.value.scale / 50), // Sets the horizontal scale to 150%
                scaleY: 1.3 * (form.value.scale / 50),  // Sets the vertical scale to 80%
            });
            fabricCanvas.value.add(img);
            fabricCanvas.value.renderAll();
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

// when Image Parsing button is clicked
const handleParse = (event) => {
    console.log("output ng laravel...........", event);
    progressing.value = false;// show prrogress bar
    handleProcessEnd();
    if (event.license_id)
        if (event.license_id !== "")
            form.value.license = event.license_id;
    if (event.expiry)
        if (event.expiry !== "")
            form.value.expirydate = event.expiry;
    if (event.name)
        if (event.name !== "")
            form.value.name = event.name;
    if (event.address)
        if (event.address !== "")
            form.value.address = event.address;
    if (event.birthDate)
        if (event.birthDate !== "")
            form.value.birthday = event.birthDate;
    if (event.nationality)
        if (event.nationality !== "")
            form.value.nationality = event.nationality;
    if (event.sex)
        if (event.sex !== "")
            form.value.sex = event.sex;
}

// scanning of ID in progress
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
    setTimeout(() => { open.value = false }, 2000) // Auto-dismiss
}

// form submit

const submit = async () => {
    // initialize Form_data for posting
    const form_data = useForm(form.value);
    // convert first the base64 images to blob file before transport
    const base64Response = await fetch(form.value.image_file);
    form_data.image_file = await base64Response.blob();
    const base64Response1 = await fetch(form.value.lic_image_file);
    form_data.lic_image_file = await base64Response1.blob();
    // posting form_data to backend database
    //form_data.post(post_complaint().url, {
    //    preserveScroll: true,
    //});
};

//---------------------------------------- WEBCAM
import { WebCamUI } from 'vue-camera-lib';
const img = ref();
const openLicenseWebCam = ref(false);

/*
const photoTakenLicense = (data) => {
    blobToBase64(data.blob).then(base64URL => {
        if (form.value.id_count === 0)
            form.value.image_id_file1 = base64URL
        else
            if (form.value.id_count === 1)
                form.value.image_id_file2 = base64URL;
            else
                if (form.value.id_count === 2)
                    form.value.image_id_file3 = base64URL;
        if (form.value.id_count === 2) form.value.id_count = 0; else form.value.id_count++;
        router.visit(employee.create_scan_license().url, { method: 'get' }); //go back to visit main
    });
}
*/

const photoTakenLicense = (data) => {
    form.value.image_id_file1 = data.blob; // the file is required for uploading
    blobToBase64(data.blob).then(base64URL => {
        form6.value.image_id_file1 = base64URL;
        openLicenseWebCam.value = false; // close webcam dialog
        fabric.Image.fromURL(form6.value.image_id_file1).then(img => {
            const ctx = fabricCanvas.value.getContext("2d");
            //ctx.filter = 'brightness(130%) saturate(0%) contrast(1000%)';
            ctx.filter = "brightness(" + (2 * form.value.brightness).toString() + "%) saturate(0%) contrast(500%)";
            img.set({
                left: 320,
                top: 300,
                angle: 0,
                opacity: 1,
                scaleX: 1.0 * (form.value.scale / 50), // Sets the horizontal scale to 150%
                scaleY: 1.3 * (form.value.scale / 50),  // Sets the vertical scale to 80%
            });
            fabricCanvas.value.add(img);
            fabricCanvas.value.renderAll();
        }); // Optional settings;
        //router.visit(employee.create_scan_license().url, { method: 'get' }); //go back to visit main
    });
}

const photoTaken = (data) => {
    blobToBase64(data.blob).then(result => {
        if (form.value.imag_count === 0)
            form.value.image_file = result
        else
            if (form.value.imag_count === 1)
                form.value.image_file1 = result
            else
                if (form.value.imag_count === 2)
                    form.value.image_file2 = result
                else
                    if (form.value.imag_count === 3)
                        form.value.image_file3 = result;
        if (form.value.imag_count === 3) form.value.imag_count = 0; else form.value.imag_count++;
        router.visit(canvas.index().url, { method: 'get' }); //go back to visit main
    });
}

//------------------------------------ slider ----------------------------

import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui';
const handleValueChange = () => {
    // LOAD PRE SAVED license image
    if (form6.value.image_id_file1) {
        fabricCanvas.value.clear();
        fabric.Image.fromURL(form6.value.image_id_file1).then(image => {
            img.value = image;
            const ctx = fabricCanvas.value.getContext("2d");
            //ctx.filter = 'brightness(130%) saturate(0%) contrast(1000%)';
            ctx.filter = "brightness(" + (2 * form.value.brightness).toString() + "%) saturate(0%) contrast(500%)";
            img.value.set({
                left: 320,
                top: 300,
                angle: 0,
                opacity: 1,
                scaleX: 1.0 * (form.value.scale / 50), // Sets the horizontal scale to 150%
                scaleY: 1.3 * (form.value.scale / 50),  // Sets the vertical scale to 80%
            });
            fabricCanvas.value.add(img.value);
            fabricCanvas.value.renderAll();
        }); // Optional settings;
    }
};

</script>

<template>

    <Head v-bind:title="headTitle" />
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" class="relative border-0 text-white bg-neutral-950 rounded-none overflow-y-auto">
            <div class="absolute top-0 h-[100%] w-full bg-neutral-150 ">
                <div class="flex flex-col w-full h-[100%]  text-white px-4 py-3 gap-2">
                    <div class="z-150 h-[130px] md:h-[35px] w-full" />
                    <div class="flex-1 z-0 w-[100%] overflow-auto">
                        <!-- Main Content Start -->

                        <div class="h-4 w-[100%]">
                            <ProgressRoot :model-value="progress" v-show="progressing"
                                class="rounded-full mb-4 h-4 w-[100%] overflow-hidden bg-white dark:bg-stone-950 border border-muted">
                                <ProgressIndicator
                                    class="indicator rounded-full block relative w-full h-4 bg-grass9 transition-transform overflow-hidden duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] after:animate-progress after:content-[''] after:absolute after:inset-0  after:bg-[linear-gradient(-45deg,_rgba(255,255,255,0.2)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.2)_50%,_rgba(255,255,255,0.2)_75%,_transparent_75%,_transparent)] after:bg-[length:30px_30px]"
                                    :style="`transform: translateX(-${100 - progress}%)`" />
                            </ProgressRoot>
                        </div>

                        <!-- Activity Progress Indicator -->
                        <div class=" bg-gray-800 rounded-lg p-2 lg:px-6 flex flex-col mb-6 mx-10 hidden md:block">
                            <div class="w-[100%] border border-b-gray-600 p-3 pb-4">
                                <span class=" text-xl">Employee License Scan</span>
                            </div>
                            <div class=" flex flex-col lg:flex-row gap-2 rounded-lg p-2 lg:px-6 lg:pt-6 lg:pb-0">

                                <div
                                    class="flex-1 p-3 border-t-8 border-t-blue-600 flex items-center justify-center text-white">
                                    Scan Driver's License
                                </div>
                                <div
                                    class="flex-1 p-3 border-t-8 border-t-gray-600 flex items-center justify-center text-gray-400">
                                    Upload 2 more valid IDs
                                </div>
                                <div
                                    class="flex-1 p-3 border-t-8 border-t-gray-600 flex items-center justify-center text-gray-400">
                                    Upload 4 employee pictures
                                </div>
                                <div
                                    class="flex-1 p-3 border-t-8 border-t-gray-600 flex items-center justify-center text-gray-400">
                                    Check All Inputs before saving
                                </div>
                            </div>
                        </div>


                        <div class="flex flex-col lg:flex-row  w-[100%] gap-3 lg:gap-0">
                            <div class="flex flex-col lg:flex-row gap-3">
                                <div class="flex flex-col w-[100%]">
                                    <Label>Select Picture File of License</Label>
                                    <div class="flex flex-row">
                                        <Button disabled
                                            class=" text-white border border-green-900 w-[50px] h-[40px] rounded-none rounded-tl-lg bg-slate-600">
                                            <GitPullRequestCreate />
                                        </Button>
                                        <Input class=" border border-green-900 rounded-none w-[100%] lg:w-[250px]"
                                            type="file" accept="image/*" @change="fileChange"></Input>
                                    </div>
                                </div>
                                <!-- Take License Picture Starts -->
                                <TooltipProvider>
                                    <TooltipRoot>
                                        <TooltipTrigger
                                            class="text-grass11 shadow-blackA7 inline-flex h-[100%] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                            <!-- Dialog Start -->
                                            <Dialog ref="licensePhotoDialog" class="m-w-[600px]"
                                                v-model:open="openLicenseWebCam">
                                                <DialogTrigger as-child>
                                                    <Button
                                                        class=" bg-gray-900 text-blue-200 hover:bg-gray-800 h-[100%] w-[100%] ">
                                                        <div class="flex flex-row gap-2">
                                                            <Aperture /><span>From Web Cam</span>
                                                        </div>
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent class="m-w-[600px]">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Take Photo of License
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Make your license readable ...
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <!------------------------ BODY STARTS ----------------------------->
                                                    <div>

                                                        <WebCamUI :fullscreenState="false"
                                                            @photoTaken="photoTakenLicense"
                                                            class="w-[100%] text-black" />

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
                                                Take a photo of your license to register an account
                                                <TooltipArrow class=" fill-slate-700" :width="8" />
                                            </TooltipContent>
                                        </TooltipPortal>
                                    </TooltipRoot>
                                </TooltipProvider>
                                <!-- Take License Picture Ended -->
                            </div>

                            <div class="ml-auto"></div>
                            <Button
                                class=" hover:shadow-md w-[100%] lg:w-[400px] h-[60px] hover:shadow-slate-400 rounded-none  lg:rounded-tr-lg"
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
                                <div class="w-[100%] flex flex-col ">
                                    <span>Brightness</span>
                                    <SliderRoot v-model="form.brightness" @update:modelValue="handleValueChange"
                                        class="relative flex items-center select-none touch-none w-[100%] h-5"
                                        :max="100" :step="1">
                                        <SliderTrack class="bg-stone-500/30 relative grow rounded-full h-2">
                                            <SliderRange class="absolute bg-grass8 rounded-full h-full" />
                                        </SliderTrack>
                                        <SliderThumb
                                            class="block w-6 h-6 bg-white rounded-full hover:bg-stone-50 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-grass9"
                                            aria-label="Volume" />
                                    </SliderRoot>
                                </div>
                                <div class="w-[100%] flex flex-col">
                                    <span>Scale</span>
                                    <SliderRoot v-model="form.scale" @update:modelValue="handleValueChange"
                                        class="relative flex items-center select-none touch-none w-[100%] h-5"
                                        :max="100" :step="1">
                                        <SliderTrack class="bg-stone-500/30 relative grow rounded-full h-2">
                                            <SliderRange class="absolute bg-grass8 rounded-full h-full" />
                                        </SliderTrack>
                                        <SliderThumb
                                            class="block w-6 h-6 bg-white rounded-full hover:bg-stone-50 shadow-sm focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-grass9"
                                            aria-label="Volume" />
                                    </SliderRoot>
                                </div>
                                <canvas ref="canvasRef" height="600" width="800" class="!w-[100%] "></canvas>
                            </div>
                            <div v-if="form.image_file"
                                class=" w-[100%] md:w-3/4 overflow-hidden border border-green-900">
                                <img class="w-full object-cover object-center" :src="form.image_file" />
                                <img class="w-full object-cover object-center" :src="form.image_file1" />
                                <img class="w-full object-cover object-center" :src="form.image_file2" />
                                <img class="w-full object-cover object-center" :src="form.image_file3" />
                                <img class="w-full" :src="form.lic_image_file" />
                                <img class="w-full" :src="form.lic_image_file1" />
                            </div>
                            <form @submit.prevent="submit"
                                class="flex-grow sm:w-[400px] space-y-6 rounded-none border border-green-900">
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
                        <br>

                        <!-- Prev and Next Buttons -->
                        <div class="w-100% flex flex-row">
                            <Button Disabled class=" bg-blue-700 hover:text-blue-900 text-white p-6 mr-5" @click="router.visit(employee.create_scan_license().url, { method: 'get' })">
                                <ArrowLeftFromLine />Prev
                            </Button>
                            <div class="ml-auto"></div>
                            <Button class=" bg-blue-700 hover:text-blue-900 text-white p-6 mr-5" @click="router.visit(employee.create_upload_2ids().url, { method: 'get' })">
                                 Next
                                <ArrowRightFromLine />
                            </Button>
                        </div>

                        <br>
                        <!-- Main Content Ended -->
                    </div>
                </div>
            </div>

            <!-- Header and Function Buttons Start -->
            <div
                class="absolute top-0 flex w-full md:h-12 px-4 pb-0 overflow-hidden bg-gray-950 border-b md:border-b-2 md:border-b-slate-500">
                <div class="flex md:h-12 shrink-0 items-center gap-2 w-[100%]  p-0 ">
                    <div class="flex flex-col md:flex-row  gap-2 w-[100%] ">
                        <div class="flex flex-row my-auto">
                            <SidebarTrigger class="-ml-1 text-white mb-0" />
                            <template v-if="breadcrumbs.length > 0">
                                <Breadcrumb class="mt-1">
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
                        </div>

                        <!--  Additional Local Menu/Function Buttons-->
                        <div
                            class="flex flex-col-reverse md:flex-row gap-2 md:ml-auto mt-auto mb-1 p-0  border-b-2 border-slate-600 md:border-none">
                            <!-- Menu Buttons in top left AppBar Start -->

                            <!-- Tab Menu -->
                            <div class="flex flex-row gap-2">
                                <div class="ml-auto"></div>
                                <TooltipProvider>
                                    <TooltipRoot>
                                        <!-- Selected Tab Class can also remove @click-->
                                        <TooltipTrigger
                                            class="text-grass11 shadow-blackA7  inline-flex h-[45px]  items-center justify-center rounded-none bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black mb-0 mt-2 rounded-t-sm border border-slate-500 border-b-4 md:border-b-8 border-b-red-900">
                                            <button disabled class="  text-blue-200 p-2"
                                                @click="router.visit(canvas.index().url, { method: 'get' })">
                                                <div class="flex flex-row gap-2">
                                                    <LocateFixed /> <span>New Employee</span>
                                                </div>
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipPortal>
                                            <TooltipContent
                                                class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                :side-offset="5">
                                                Make a new account
                                                <TooltipArrow class=" fill-slate-700" :width="8" />
                                            </TooltipContent>
                                        </TooltipPortal>
                                    </TooltipRoot>
                                </TooltipProvider>

                                <TooltipProvider>
                                    <TooltipRoot>
                                        <!-- Non Selected Tab Class can also remove @click-->
                                        <TooltipTrigger
                                            class="text-grass11 shadow-blackA7 hover:bg-slate-600 inline-flex h-[40px] items-center justify-center rounded-none bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black mb-0 mt-2 rounded-t-sm border-2 border-blue-950">
                                            <button class="  text-blue-200 mb-0 p-2"
                                                @click="router.visit(canvas.create().url, { method: 'get' })">
                                                <div class="flex flex-row gap-2">
                                                    <UtilityPole /> <span>Index</span>
                                                </div>
                                            </button>
                                        </TooltipTrigger>

                                        <TooltipPortal>
                                            <TooltipContent
                                                class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-gray-300 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                :side-offset="5">
                                                Search and Find an Existing Account
                                                <TooltipArrow class=" fill-slate-700" :width="8" />
                                            </TooltipContent>
                                        </TooltipPortal>
                                    </TooltipRoot>
                                </TooltipProvider>
                            </div>

                            <!-- Function Button Menu -->
                            <div class=" flex flex-row md:border-l md:border-blue-800 pl-3 pt-1">
                                <TooltipProvider>
                                    <TooltipRoot>
                                        <TooltipTrigger
                                            class="text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                            <!-- Dialog Start -->
                                            <Dialog ref="licensePhotoDialog" class="m-w-[600px]"
                                                v-model:open="openLicenseWebCam">
                                                <DialogTrigger as-child>
                                                    <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800">
                                                        <Aperture />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent class="m-w-[600px]">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Take Photo of License
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Make your license readable ...
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <!------------------------ BODY STARTS ----------------------------->
                                                    <div>

                                                        <WebCamUI :fullscreenState="false"
                                                            @photoTaken="photoTakenLicense"
                                                            class="w-[100%] text-black" />

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
                                                Take a photo of your license to register an account
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
                                            <Dialog class="m-w-[600px]">
                                                <DialogTrigger as-child>
                                                    <Button class=" bg-gray-900 text-blue-200 hover:bg-gray-800">
                                                        <Camera />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent class="m-w-[600px]">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Take Photo
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Smile at the camera for a better look ...
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <!------------------------ BODY STARTS ----------------------------->
                                                    <div>

                                                        <WebCamUI :fullscreenState="false" @photoTaken="photoTaken"
                                                            class="w-[100%] text-black" />

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
                                                Take a portrait Photo
                                                <TooltipArrow class=" fill-slate-700" :width="8" />
                                            </TooltipContent>
                                        </TooltipPortal>
                                    </TooltipRoot>
                                </TooltipProvider>

                                <!-- Search Function button and input text-->
                                <div class="flex flex-row ml-2 w-[100%]">
                                    <Button
                                        class=" rounded-2xl rounded-r-none bg-gray-900 text-blue-200 hover:bg-gray-800"
                                        @click="customerSearch()">
                                        <Search />
                                    </Button>
                                    <Input class=" h-[30px] rounded-l-none mt-1 flex-grow" placeholder="Search" />
                                </div>
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
