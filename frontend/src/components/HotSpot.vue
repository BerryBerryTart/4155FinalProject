<template>
    <div>
        <h1 class="text-center">HotSpots</h1>
        <b-row>
            <b-col :key="hotspot.id" v-for="hotspot in hotspotList">
                <hotspotItem :hsItem='hotspot'/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
   name:'HotSpot',
   props:['hotspotList'] 
}
</script>

<style scoped>

</style>