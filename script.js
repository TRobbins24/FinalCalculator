const vue_app = Vue.createApp({
    // This automatically imports your movies.json file and puts it into
    //   the variable: movies

    


    data() {
          return {
             title: "Genesis Final Grade Calculator",
             finalTitle: "Final Grade:",
             majorGrade: [],
             minorGrade: [],
             indGrade: [],
             majorWeight: '',
             minorWeight: '',
             indWeight: '',
             finalGrade: '',
             totalMajor: '',
             totalMinor: '',
             totalIndiv: ''

          }
    },
    methods: {
        saveData: function() {
            var mWeight = this.majorWeight;
            var minWeight = this.minorWeight;
            var indWeight = this.indWeight;
            var mGrade = this.majorGrade;
            var minGrade = this.minorGrade;
            var iGrade = this.indGrade;

          

            if (mWeight <= 0 || mWeight > 100) {
                document.getElementById("majorWeight").style.borderColor = "red";             
            }
            if (minWeight <= 0 || minWeight > 100) {
                document.getElementById("minorWeight").style.borderColor = "red";
            }
            if (indWeight <= 0 || indWeight > 100) {
                document.getElementById("indWeight").style.borderColor = "red";
            }
            if (mGrade <= 0 || mGrade > 100) {
                document.getElementById("majorGrade").style.borderColor = "red";

            }
            if (minGrade <= 0 || minGrade > 100) {
                document.getElementById("minorGrade").style.borderColor = "red";
            }
            if (iGrade <= 0 || iGrade > 100) {
                document.getElementById("indGrade").style.borderColor = "red";
            }


           


            

            console.log(mWeight + " Major Weight");
            console.log(minWeight + " Minor Weight");
            console.log(indWeight + " Individual Weight");
            console.log(mGrade + " Major Grade");
            console.log(minGrade + " Minor Grade");
            console.log(iGrade + " Individual Grade");

            // <!-- EQUATION: Final Grade = (Category 1 Weight * Category 1 Average Grade) + (Category 1 Weight * Category 1 Average Grade) + (Category 1 Weight * Category 1 Average Grade) -->




            this.finalGrade = ((mWeight * mGrade) + (minWeight * minGrade) + (indWeight * iGrade)) / 100;
            this.finalGrade = this.finalGrade.toFixed(2) + "%";
            console.log(this.finalGrade + " is your final grade!");
            



        },

        addMajorGrade: function(){

            var newGrade = `
            <div class="row" id="MajorGrade">
                <label class="col-4 col-form-label">Input Major Assessment Grades:</label> 
                <div class="col-8">
                <input type="number" id="majorGrade" min="1" max="100" v-model="majorGrade" class="form-control">
                </div>
            </div> `;

            var originalDiv = document.getElementById('MajorGrade');
            originalDiv.insertAdjacentHTML('afterend', newGrade);
            this.totalMajor++;
        },
        addMinorGrade: function(){

            var newGrade = `
            <div class="row" id="MinorGrade">
                <label class="col-4 col-form-label">Input Minor Assessment Grades:</label>
                <div class="col-8">
                  <input type="number" id="minorGrade" min="1" max="100" v-model="minorGrade" class="form-control">
                </div>
              </div> `;

            var originalDiv = document.getElementById('MinorGrade');
            originalDiv.insertAdjacentHTML('afterend', newGrade);
            this.totalMinor++;
        },
        addIndivGrade: function(){

            var newGrade = `
            <div class="row" id="IndGrade">
                <label class="col-4 col-form-label">Input Individual Work Grades:</label>
                <div class="col-8">
                  <input type="number" id="indGrade" min="1" max="100" v-model="indGrade" class="form-control">
                </div>
              </div>`;

            var originalDiv = document.getElementById('IndGrade');
            originalDiv.insertAdjacentHTML('afterend', newGrade);
            this.totalIndiv++;
        }



      }

         

    })

vue_app.mount("#vue_app")

