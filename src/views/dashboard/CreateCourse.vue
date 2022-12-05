<template>
    <div class="about">
  
        <div class="hero is-info">
            <div class="hero-body has-text-centered">
                <h1 class="title">Create course</h1>
            </div>
        </div>

        <section class="section">

        </section>
    </div>
    
</template>

<script>
export default{
    data () {
        return {
            form: {
                title: '',
                short_description: '',
                long_description: ''
            },
            categories: [],  
        }
    },
    mounted () {
        this.getCategories()
    },
    methods: {
        getCategories() {
            console.log('getCategories')
        }
    }
}
</script>