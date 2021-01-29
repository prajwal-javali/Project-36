class Contestant {
    constructor() {
        this.index = null
        this.name = null
        this.distance = 0
    }

    getCount() {
        database.ref('contestantCount').on("value", function(d) {
            contestantCount = d.val()
        })
    }

    updateCount(e) {
        database.ref('/').update({
            contestantCount: e
        })
    }

    update() {
        var contestantinfo = "contestants/contestant" + this.index
        database.ref(contestantinfo).update({
            name: this.name,
            distance: this.distance
        })
    }

    static getcontestantsInfo() {
        database.ref('contestants').on("value", (c)=> {
            allcontestants = c.val()
        })
    }

  
}