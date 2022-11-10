<template>
    <div class="w-1/4 mt-4 ml-10 inline-block bg-slate-200 rounded-2xl border-zinc-300 border-2 border-solid cursor-pointer hover:bg-red-100 hover:opacity-80 hover:shadow-lg hover:shadow-gray-700 hover:scale-105 hover:transition duration-300 ease-in-out">
        <!-- <div :style="getUrlImage(image)" class="w-3/4 h-56 p-48 rounded-xl	"></div> -->
        <img id="img" src="../assets/images/default.png" class="pt-2 ml-24 rounded-xl border-gray-500 border-solid" alt="boost" width="200">
        <p class="text-center mt-1">Name : {{name}}</p>
        <p class="text-center">Age : {{age}}</p>
        <p class="text-center mb-1">Birthday : {{birthday}}</p>
        
        <span class="flex items-center justify-center my-5 border-t-2 border-gray-800 pt-4 mx-12">
            <font-awesome-icon icon="fa-brands fa-facebook" class="text-3xl mr-3" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="text-3xl mr-3" />
            <font-awesome-icon icon="fa-brands fa-github-alt" class="text-3xl"/>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required:true
            },
            age: {
                type: Number,
                required:true
            },
            birthday: {
                type:String,
                default:"-"
            }
            // image: {
            //    type:String,
            //    default:"default.png" 
            // }
        },
        methods: 
        {
            getUrlImage(image)
            {
                return {'background-image': 'url("./src/assets/images/'+ image +'")'};
            }
        }
    }
</script>