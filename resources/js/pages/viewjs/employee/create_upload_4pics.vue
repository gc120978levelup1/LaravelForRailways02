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

interface Props {
    employee: object,
}
const props = defineProps<Props>();
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
    form.value = { ...form.value, ...props.employee }
});

// Start of other import

const breadcrumbs: bc[] = [
    {
        title: 'Register Employee - Upload 4 photos',
        href: dashboard().url,
    },
];
const headTitle = 'Register Employee';

// Refs and Variable Area
const loading = ref(false);

const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

const fileChangeFile1 = (event) => {
    // convert blob file to base64
    form.value.image_emp_file1 = event.target.files[0];
    blobToBase64(event.target.files[0]).then(base64URL => {
        form2.value.image_emp_file1 = base64URL;
    });
}

const fileChangeFile2 = (event) => {
    // convert blob file to
    form.value.image_emp_file2 = event.target.files[0];
    blobToBase64(event.target.files[0]).then(base64URL => {
        form3.value.image_emp_file2 = base64URL;
    });
}

const fileChangeFile3 = (event) => {
    // convert blob file to base64
    form.value.image_emp_file3 = event.target.files[0];
    blobToBase64(event.target.files[0]).then(base64URL => {
        form4.value.image_emp_file3 = base64URL;
    });
}

const fileChangeFile4 = (event) => {
    // convert blob file to base64
    form.value.image_emp_file4 = event.target.files[0];
    blobToBase64(event.target.files[0]).then(base64URL => {
        form5.value.image_emp_file4 = base64URL;
    });
}

const progress = ref(0);
const progressing = ref(false);


//-----------------------------------------------------
const gotoPrevPage = () => {
    loading.value = true;
    const form_data = useForm(form.value);
    form_data.get(employee.create_upload_2ids({ id: form_data.id }).url, {
        preserveScroll: true,
    });
};
const gotoNextPage = () => {
    loading.value = true;
    const form_data = useForm(form.value);
    form_data.post(employee.update_create_upload_4pics({ id: form_data.id }).url, {
        preserveScroll: true,
    });
};

const submit = () => {
    loading.value = true;
    // initialize Form_data for posting
    const form_data = useForm(form.value);
    /*
    const form_data = useForm({
        license: form.value.license,
        expirydate: form.value.expirydate,
        name: form.value.name,
        address: form.value.address,
        birthday: form.value.birthday,
        nationality: form.value.nationality,
        sex: form.value.sex,
        id2_number: form.value.id2_number,
        id2_type: form.value.id2_type,
        id3_number: form.value.id3_number,
        id3_type: form.value.id3_type,
        //image_emp_file1: null,
        //image_emp_file2: null,
        // image_emp_file3: null,
        //image_emp_file4: null,
        image_id_file1: form.value.image_id_file1,
        //image_id_file2: null,
        //image_id_file3: null,
    });
    */
    // posting form_data to backend database
    form_data.post(employee.post().url, {
        preserveScroll: true,
    });
};


//---------------------------------------- WEBCAM
import { WebCamUI } from 'vue-camera-lib';

const openLicenseWebCam1 = ref(false);
const openLicenseWebCam2 = ref(false);
const openLicenseWebCam3 = ref(false);
const openLicenseWebCam4 = ref(false);

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

const photoTakenLicense1 = (data) => {
    form.value.image_emp_file1 = data.blob;
    blobToBase64(data.blob).then(base64URL => {
        form2.value.image_emp_file1 = base64URL;
        openLicenseWebCam1.value = false;
        //router.visit(employee.create_scan_license().url, { method: 'get' }); //go back to visit main
    });
}

const photoTakenLicense2 = (data) => {
    form.value.image_emp_file2 = data.blob;
    blobToBase64(data.blob).then(base64URL => {
        form3.value.image_emp_file2 = base64URL;
        openLicenseWebCam2.value = false;
        //router.visit(employee.create_scan_license().url, { method: 'get' }); //go back to visit main
    });
}

const photoTakenLicense3 = (data) => {
    form.value.image_emp_file3 = data.blob;
    blobToBase64(data.blob).then(base64URL => {
        form4.value.image_emp_file3 = base64URL;
        openLicenseWebCam3.value = false;
        //router.visit(employee.create_scan_license().url, { method: 'get' }); //go back to visit main
    });
}

const photoTakenLicense4 = (data) => {
    form.value.image_emp_file4 = data.blob;
    blobToBase64(data.blob).then(base64URL => {
        form5.value.image_emp_file4 = base64URL;
        openLicenseWebCam4.value = false;
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
                                <span class=" text-xl">Employee pictures upload</span>
                            </div>
                            <div class=" flex flex-col lg:flex-row gap-2 rounded-lg p-2 lg:px-6 lg:pt-6 lg:pb-0">
                                <div
                                    class="flex-1 p-3 border-t-8 border-t-gray-700 flex items-center justify-center text-gray-500">
                                    Scan Driver's License
                                </div>
                                <div
                                    class="flex-1 p-3 border-t-8 border-t-gray-700 flex items-center justify-center text-gray-500">

                                    Upload 2 more valid IDs
                                </div>

                                <div
                                    class="flex-1 p-3 border-t-8 border-t-blue-600 flex items-center justify-center text-white">
                                    Upload 4 employee pictures
                                </div>
                                <div
                                    class="flex-1 p-3 border-t-8 border-t-gray-600 flex items-center justify-center text-gray-400">
                                    Check All Inputs before saving
                                </div>
                            </div>
                        </div>




                        <div class="flex flex-col  gap-3 w-[100%] overflow-hidden">

                            <!--img class="w-full object-cover object-center" :src="form.image_file" />
                                <img class="w-full object-cover object-center" :src="form.image_file1" />
                                <img class="w-full object-cover object-center" :src="form.image_file2" />
                                <img class="w-full object-cover object-center" :src="form.image_file3" /-->

                            <div class="flex flex-col md:flex-row border mb-5">
                                <div class="flex flex-col w-[65%]">
                                    <img class="w-[100%]  object-cover object-center" :src="form2.image_emp_file1" />

                                    <div class="flex flex-col lg:flex-row  w-[100%] gap-3 lg:gap-0">
                                        <div class="flex flex-col lg:flex-row gap-3">
                                            <div class="flex flex-col w-[100%]">
                                                <Label>Select Picture File</Label>
                                                <div class="flex flex-row">
                                                    <Button disabled
                                                        class=" text-white border border-green-900 w-[50px] h-[40px] rounded-none rounded-tl-lg bg-slate-600">
                                                        <GitPullRequestCreate />
                                                    </Button>
                                                    <Input
                                                        class=" border border-green-900 rounded-none w-[100%] lg:w-[250px]"
                                                        type="file" accept="image/*" @change="fileChangeFile1"></Input>
                                                </div>
                                            </div>

                                            <!-- Take License Picture Starts -->
                                            <TooltipProvider>
                                                <TooltipRoot>
                                                    <TooltipTrigger
                                                        class="text-grass11 shadow-blackA7 inline-flex h-[100%] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                                        <!-- Dialog Start -->
                                                        <Dialog ref="licensePhotoDialog" class="m-w-[600px]"
                                                            v-model:open="openLicenseWebCam1">
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
                                                                        @photoTaken="photoTakenLicense1"
                                                                        class="w-[100%] text-black" />

                                                                </div>
                                                                <!------------------------- BODY ENDS ----------------------------->
                                                                <DialogFooter>
                                                                    <Input class=" shadow-red-800"
                                                                        v-show="showConfirmDelete" v-model="deleteAll"
                                                                        placeholder='Type in "delete all" to confirm'></Input>
                                                                    <Button variant="destructive"
                                                                        @click="confirmClearClick()">
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
                                    </div>
                                </div>

                                <form @submit.prevent="submit"
                                    class="flex-1 sm:w-[400px] space-y-6 rounded-none border border-green-900">
                                    <div class=" flex-auto flex flex-col gap-4 p-4">
                                        <div>
                                            <Label class="mb-2">Photo ID Picture (Portrait)</Label>

                                        </div>

                                    </div>
                                </form>
                                <Button @click="submit">xxxxxxxxxxxxx</Button>
                            </div>


                            <div class="flex flex-col md:flex-row border mb-5">
                                <div class="flex flex-col w-[65%]">
                                    <img class="w-[100%]  object-cover object-center" :src="form3.image_emp_file2" />

                                    <div class="flex flex-col lg:flex-row  w-[100%] gap-3 lg:gap-0">
                                        <div class="flex flex-col lg:flex-row gap-3">
                                            <div class="flex flex-col w-[100%]">
                                                <Label>Select Picture File</Label>
                                                <div class="flex flex-row">
                                                    <Button disabled
                                                        class=" text-white border border-green-900 w-[50px] h-[40px] rounded-none rounded-tl-lg bg-slate-600">
                                                        <GitPullRequestCreate />
                                                    </Button>
                                                    <Input
                                                        class=" border border-green-900 rounded-none w-[100%] lg:w-[250px]"
                                                        type="file" accept="image/*" @change="fileChangeFile2"></Input>
                                                </div>
                                            </div>

                                            <!-- Take License Picture Starts -->
                                            <TooltipProvider>
                                                <TooltipRoot>
                                                    <TooltipTrigger
                                                        class="text-grass11 shadow-blackA7 inline-flex h-[100%] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                                        <!-- Dialog Start -->
                                                        <Dialog ref="licensePhotoDialog" class="m-w-[600px]"
                                                            v-model:open="openLicenseWebCam2">
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
                                                                        @photoTaken="photoTakenLicense2"
                                                                        class="w-[100%] text-black" />

                                                                </div>
                                                                <!------------------------- BODY ENDS ----------------------------->
                                                                <DialogFooter>
                                                                    <Input class=" shadow-red-800"
                                                                        v-show="showConfirmDelete" v-model="deleteAll"
                                                                        placeholder='Type in "delete all" to confirm'></Input>
                                                                    <Button variant="destructive"
                                                                        @click="confirmClearClick()">
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
                                    </div>
                                </div>

                                <form @submit.prevent="submit"
                                    class="flex-1 sm:w-[400px] space-y-6 rounded-none border border-green-900">
                                    <div class=" flex-auto flex flex-col gap-4 p-4">
                                        <div>
                                            <Label class="mb-2">Full Body Picture</Label>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div class="flex flex-col md:flex-row border mb-5">
                                <div class="flex flex-col w-[65%]">
                                    <img class="w-[100%]  object-cover object-center" :src="form4.image_emp_file3" />

                                    <div class="flex flex-col lg:flex-row  w-[100%] gap-3 lg:gap-0">
                                        <div class="flex flex-col lg:flex-row gap-3">
                                            <div class="flex flex-col w-[100%]">
                                                <Label>Select Picture File</Label>
                                                <div class="flex flex-row">
                                                    <Button disabled
                                                        class=" text-white border border-green-900 w-[50px] h-[40px] rounded-none rounded-tl-lg bg-slate-600">
                                                        <GitPullRequestCreate />
                                                    </Button>
                                                    <Input
                                                        class=" border border-green-900 rounded-none w-[100%] lg:w-[250px]"
                                                        type="file" accept="image/*" @change="fileChangeFile3"></Input>
                                                </div>
                                            </div>

                                            <!-- Take License Picture Starts -->
                                            <TooltipProvider>
                                                <TooltipRoot>
                                                    <TooltipTrigger
                                                        class="text-grass11 shadow-blackA7 inline-flex h-[100%] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                                        <!-- Dialog Start -->
                                                        <Dialog ref="licensePhotoDialog" class="m-w-[600px]"
                                                            v-model:open="openLicenseWebCam3">
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
                                                                        @photoTaken="photoTakenLicense3"
                                                                        class="w-[100%] text-black" />

                                                                </div>
                                                                <!------------------------- BODY ENDS ----------------------------->
                                                                <DialogFooter>
                                                                    <Input class=" shadow-red-800"
                                                                        v-show="showConfirmDelete" v-model="deleteAll"
                                                                        placeholder='Type in "delete all" to confirm'></Input>
                                                                    <Button variant="destructive"
                                                                        @click="confirmClearClick()">
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
                                    </div>
                                </div>

                                <form @submit.prevent="submit"
                                    class="flex-1 sm:w-[400px] space-y-6 rounded-none border border-green-900">
                                    <div class=" flex-auto flex flex-col gap-4 p-4">
                                        <div>
                                            <Label class="mb-2">Additional Photo</Label>

                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div class="flex flex-col md:flex-row border mb-5">
                                <div class="flex flex-col w-[65%]">
                                    <img class="w-[100%]  object-cover object-center" :src="form5.image_emp_file4" />

                                    <div class="flex flex-col lg:flex-row  w-[100%] gap-3 lg:gap-0">
                                        <div class="flex flex-col lg:flex-row gap-3">
                                            <div class="flex flex-col w-[100%]">
                                                <Label>Select Picture File</Label>
                                                <div class="flex flex-row">
                                                    <Button disabled
                                                        class=" text-white border border-green-900 w-[50px] h-[40px] rounded-none rounded-tl-lg bg-slate-600">
                                                        <GitPullRequestCreate />
                                                    </Button>
                                                    <Input
                                                        class=" border border-green-900 rounded-none w-[100%] lg:w-[250px]"
                                                        type="file" accept="image/*" @change="fileChangeFile4"></Input>
                                                </div>
                                            </div>

                                            <!-- Take License Picture Starts -->
                                            <TooltipProvider>
                                                <TooltipRoot>
                                                    <TooltipTrigger
                                                        class="text-grass11 shadow-blackA7 inline-flex h-[100%] items-center justify-center rounded-lg bg-slate-900 shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                                        <!-- Dialog Start -->
                                                        <Dialog ref="licensePhotoDialog" class="m-w-[600px]"
                                                            v-model:open="openLicenseWebCam4">
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
                                                                        @photoTaken="photoTakenLicense4"
                                                                        class="w-[100%] text-black" />

                                                                </div>
                                                                <!------------------------- BODY ENDS ----------------------------->
                                                                <DialogFooter>
                                                                    <Input class=" shadow-red-800"
                                                                        v-show="showConfirmDelete" v-model="deleteAll"
                                                                        placeholder='Type in "delete all" to confirm'></Input>
                                                                    <Button variant="destructive"
                                                                        @click="confirmClearClick()">
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
                                    </div>
                                </div>

                                <form @submit.prevent="submit"
                                    class="flex-1 sm:w-[400px] space-y-6 rounded-none border border-green-900">
                                    <div class=" flex-auto flex flex-col gap-4 p-4">
                                        <div>
                                            <Label class="mb-2">Additional Photo</Label>

                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>


                        <br>

                        <!-- Prev and Next Buttons -->
                        <div class="w-100% flex flex-row">
                            <Button class=" bg-blue-700 hover:text-blue-900 text-white p-6 mr-5"
                                @click="gotoPrevPage">
                                <ArrowLeftFromLine />Prev
                            </Button>
                            <div class="ml-auto"></div>
                            <Button class=" bg-blue-700 hover:text-blue-900 text-white p-6 mr-5"
                                @click="gotoNextPage">
                                Next<ArrowRightFromLine />
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
