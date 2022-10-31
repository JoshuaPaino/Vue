<template lang="">
   <p class="User">{{User}}</p>
</template>

<script>

export default {
    props:{
        User: {
            type:String,
            required: true,
        }
    }

}
</script>

<style lang="css" scoped>


.User {
    color: yellow;
    font-size: 50px;
}
</style>