new Vue ({
    el: '#app',
    data: {
        doList: [

        ],
        downList: [

        ],
        task: '',
        isCheckAll: false
    },
    methods: {
        addTask() {
            this.doList.push(this.task)
            this.task = ''
        },
        delDoTask(id) {
            this.doList.splice(id, 1)
        },
        delDownTask(id) {
            this.downList.splice(id, 1)
        },
        doCheck(id) {
            this.downList.push(this.doList[id])
            this.doList.splice(id, 1)
            this.isCheckAll = false
        },
        downCheck(id) {
            this.doList.push(this.downList[id])
            this.downList.splice(id, 1)
            this.isCheckAll = false
        },
    },
    computed: {
        doCount() {
            return this.doList.length
        },
        downCount() {
            return this.downList.length
        },
    }
});