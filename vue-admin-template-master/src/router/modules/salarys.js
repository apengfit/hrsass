import Layout from "@/layout";
export default {
    path: "/salarys",
    component: Layout,
    children: [
        {
            path: '',
            name: 'salarys',
            component: () => import('@/views/salarys/index'),
            meta: { title: "工资", icon: "money" }
        }
    ]
}