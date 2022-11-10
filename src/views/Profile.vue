<template>
    <div>
        
    <h1 class="flex items-center justify-center text-6xl mb-6 mt-4">Profile</h1>
    <!-- <div v-for="member in members" :key="member.id">
    {{member.name}}
    </div> -->

    <div v-for="member in members" :key="member">
    <profileCard 
    :v-if="member.isMember" 
    :name="member.name"
    :age="member.age"
    :birthday="member.birthday"
    ></profileCard>
    </div>
    </div>

    <!-- <div>
        <profileCard name="Withawat Pinnarat" age="19" birthday="1/1/2546"></profileCard>
        <profileCard :name="name" :age="age" :birthday="birthday" image="boost.jpg"></profileCard>
        <profileCard name="Nattapong poungjinda" age="20" ></profileCard>
    </div> -->
</template>

<script>
    import profileCard from "../components/Profile.vue";
    export default {
        data() {
            return {
                members: [
                    {
                        name: "Chavit Sittitammajak",
                        age : "19",
                        birthday: "2/6/2546",
                        isMember:false
                    },
                    {
                        name: "Withawat Pinnarat",
                        age : "19",
                        birthday: "1/1/2546",
                        isMember:true
                    },
                    {
                        name: "Nattapong poungjinda",
                        age : "19",
                        birthday: "5/4/2546",
                        isMember:true
                    },
                    {
                        name: "ford",
                        age:"22",
                        birthday:"2/1/2575",
                        isMember:true
                    }
                ]
            }
        },
        components: {profileCard}
    }
</script>