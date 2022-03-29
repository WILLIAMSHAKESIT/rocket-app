<template>
    <div>
        <div class="flex flex-col gap-5 mt-7">
            <div class="flex flex-col">
                <span class="font-bold">Event Date</span>
                <span>{{modalDataProp.event_date_utc}}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Title</span>
                <span>{{modalDataProp.title}}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Mission Name</span>
                <span>{{modalDataProp.mission_name}}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Details</span>
                <span>{{modalDataProp.details}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['modalDataProp']    
}
</script>