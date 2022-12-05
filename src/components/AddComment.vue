<template>
     <form v-on:submit.prevent="submitComment()">
        <div class="field">
            <div class="label">Name</div>
            <div class="control">
                <input type="text" class="input" v-model="comment.name">
            </div>
        </div>

        <div class="field">
            <div class="label">Message</div>
            <div class="control">
                <textarea class="textarea" v-model="comment.content"></textarea>
            </div>
        </div>

        <div 
            class="notification is-danger"
            v-for="error in errors"
            v-bind:key="error"
        >
            {{ error }}
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios'

export default{
    props: [
        'course', 'activeLesson',
    ],
    data() {
        return {
            comment: {
                name: '',
                content: ''
            },
            errors: []
        }
    },
    methods: {
        submitComment() {
            console.log('submit content')

            this.errors = []

            if(this.comment.name === ''){
                this.errors.push('The name must be filled up')
            }

            if(this.comment.content === ''){
                this.errors.push('The Message should not be empty')
            }

            if(!this.errors.length){
                axios
                    .post(`courses/${this.$route.params.slug}/${this.activeLesson.slug}/`, this.comment)
                    .then(response => {
                        this.comment.name = ''
                        this.comment.content = ''

                        this.$emit('submitComment', response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
}
</script>