<template>
    <b-card
    :title=hotspotName
    >

    </b-card>
</template>

<script>
export default {
    name: 'movieItem',
    props:['hsItem'],
    data(){
        return{
    
            hotspotName: 'Hotspot'
        }
    }
}
</script>