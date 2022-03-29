<template>
    <div class="transition-[margin] ease-in-out relative z-10 w-64 h-64 border rounded-lg cursor-pointer hover:mt-[-5px] border-zinc-600 bg-zinc-900">
        <div class="">
            <img :src="imgUrl" class="object-cover w-full h-40 rounded-t-lg">
        </div>
        <div class="flex items-center justify-center mt-7">
            <span class="text-xl font-thin text-slate-50 hover:text-slate-300">{{title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['imgUrl','title']
}
</script>