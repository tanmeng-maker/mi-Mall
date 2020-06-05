<template>
    <div id="app">
        <!-- keep-alive是vue内置的一个组件,使被包含的组件保留状态避免重新渲染也可以在路由meta标签里使用 是否缓存-->
        <keep-alive>
            <router-view/><!--路由占位符-->
        </keep-alive>   
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

