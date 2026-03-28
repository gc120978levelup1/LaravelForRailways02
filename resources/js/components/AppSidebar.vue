<script setup lang="ts">
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import { BookOpen, Folder, LayoutGrid } from 'lucide-vue-next';
import AppLogo from './AppLogo.vue';
import { dashboard } from '@/routes';
import complaint from '@/routes/complaint';
import face_recog from '@/routes/face_recog';
import qrcode from '@/routes/qrcode';
import id_scan from '@/routes/id_scan';
import photo from '@/routes/photo';
import map from '@/routes/map';
import canvas from '@/routes/canvas';
import employee from '@/routes/employee';
const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: dashboard().url,
        icon: LayoutGrid,
    },
    {
        title: 'Complaint',
        url: complaint.index().url,
        icon: BookOpen,
    },
    {
        title: 'Map',
        url: map.index().url,
        icon: BookOpen,
    },
    {
        title: 'Testing UI',
        url: map.show().url,
        icon: BookOpen,
    },
    {
        title: 'Empty',
        url: map.create().url,
        icon: BookOpen,
    },
    {
        title: 'Face Recognition',
        url: face_recog.index().url,
        icon: BookOpen,
    },
    {
        title: 'QR Code',
        url: qrcode.index().url,
        icon: BookOpen,
    },
    {
        title: 'ID Scanner',
        url: id_scan.index().url,
        icon: BookOpen,
    },
    {
        title: 'Take Photo',
        url: photo.index().url,
        icon: BookOpen,
    },
    {
        title: 'Canvas Manipulation',
        url: canvas.index().url,
        icon: BookOpen,
    },
    {
        title: 'New Employee',
        url: employee.create_scan_license().url,
        icon: BookOpen,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Github Repo',
        href: dashboard().url,
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: complaint.show(1).url,
        icon: BookOpen,
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset" class="z-0">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="complaint.index().url">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
