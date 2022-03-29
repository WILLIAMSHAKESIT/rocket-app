<template>
    <div class="flex items-center justify-between">
        <span @click="$router.push(`/`)" class="text-white cursor-pointer text-7xl">
            <svg viewBox="0 0 24 24" width="50" height="50" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </span>
        <span class="ml-[-7em] text-6xl font-bold text-slate-50">{{filterData.pageName}}</span>
        <div class="flex items-center justify-center gap-5">
            <div class="w-12 h-12">
                <img v-if="filterData.loading" :src="'https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'"/>
            </div>
            <div>
                <select 
                    v-if="filterData.selectOptions.length > 0"
                    class="form-select appearance-none
                    block
                    w-34/5
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                    v-model="filterData.selectValue"
                >   
                    <option v-for="option,index in filterData.selectOptions" :key="index" :value="option.code">{{option.label}}</option>
                </select>
            </div>
            <div class="" v-if="filterData.searchBar">
                <input
                    type="text"
                    class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                placeholder="Search"
                v-model="filterData.searchValue"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['filterData'],
}
</script>