<template>
    <div v-if="showModal" class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-slate-900/70">
        <div class="p-8 h-100% w-[50em] rounded-lg bg-slate-100 shadow-lg shadow-slate-500/40">
            <div class="flex justify-between w-full pb-3 border-b-2 border-slate-300">
                <h1 class="text-3xl font-bold">{{modalTitle}}</h1>
                <span @click="showModal = false" class="cursor-pointer">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                </span>
            </div>
            <component :is="componentName" :modal-data-prop="modalDataProp"/>
        </div>
    </div>
</template>

<script>
import LaunchesItemModal from './modalcomponents/LaunchesItemModal.vue'
import HistoryItemModal from './modalcomponents/HistoryItemModal.vue'
import RocketItemModal from './modalcomponents/RocketItemModal.vue'
import CapsuleItemModal from './modalcomponents/CapsuleItemModal.vue'
export default {
    props:['componentName','modalTitle','showModal','modalDataProp'],
    components:{
        LaunchesItemModal,
        HistoryItemModal,
        RocketItemModal,
        CapsuleItemModal
    }
}
</script>