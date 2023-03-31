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

        }
    },
    methods: {
        saveData: function () {
            var mWeight = this.majorWeight;
            var minWeight = this.minorWeight;
            var indWeight = this.indWeight;
            var mGrade = this.majorGrade;
            var minGrade = this.minorGrade;
            var iGrade = this.indGrade;

            var majorGradeElement = document.querySelector(".majorGrade");
            var minorGradeElement = document.querySelector(".minorGrade");
            var indivGradeSelector = document.querySelector(".indGrade");



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
                majorGradeElement.style.borderColor = "red";
            }
            if (minGrade <= 0 || minGrade > 100) {
                minorGradeElement.style.borderColor = "red";
            }
            if (iGrade <= 0 || iGrade > 100) {
                indivGradeSelector.style.borderColor = "red";
            }







            console.log(mWeight + " Major Weight");
            console.log(minWeight + " Minor Weight");
            console.log(indWeight + " Individual Weight");
            console.log(mGrade + " Major Grade");
            console.log(minGrade + " Minor Grade");
            console.log(iGrade + " Individual Grade");

            // <!-- EQUATION: Final Grade = (Category 1 Weight * Category 1 Average Grade) + (Category 1 Weight * Category 1 Average Grade) + (Category 1 Weight * Category 1 Average Grade) -->

            // ------------------------------------------------------------------
            //MAJOR GRADE ELEMENT VALUES
            var majorGradeElements = Array.from(document.querySelectorAll('input.majorGrade'));
            var majorGradeValues = [];
            var totalMajorGrade = 0;

            //Loops through every value from the input of Major Grade Elements and pushes them to the array.
            for (var i = 0; i < majorGradeElements.length; i++) {
                var majorGradeElement = majorGradeElements[i];
                majorGradeValues.push(majorGradeElement.value);
                // console.log(majorGradeElement.value);
            }

            //Loops through each value and adds the total length of how many inputs there are to total major grade
            for (var j = 0; j < majorGradeValues.length; j++) {
                var majorGradeValue = parseFloat(majorGradeValues[j]);
                if (isNaN(majorGradeValue)) continue; // <--- checks for any null values 
                totalMajorGrade += majorGradeValue;
            }

            //Simply gets the average of the two.
            var majorGradeAverage = totalMajorGrade / majorGradeValues.length

            // ----------------------------------------------------------------------------------------

            var minorGradeElements = Array.from(document.querySelectorAll('input.minorGrade'));
            var minorGradeValues = [];
            var totalMinorGrade = 0;

            //Loops through every value from the input of minor Grade Elements and pushes them to the array.
            for (var i = 0; i < minorGradeElements.length; i++) {
                var minorGradeElement = minorGradeElements[i];
                minorGradeValues.push(minorGradeElement.value);
                // console.log(minorGradeElement.value);
            }

            //Loops through each value and adds the total length of how many inputs there are to total minor grade
            for (var j = 0; j < minorGradeValues.length; j++) {
                var minorGradeValue = parseFloat(minorGradeValues[j]);
                if (isNaN(minorGradeValue)) continue; // <--- checks for any null values 
                totalMinorGrade += minorGradeValue;
            }

            //Simply gets the average of the two.
            var minorGradeAverage = totalMinorGrade / minorGradeValues.length

                        // ----------------------------------------------------------------------------------------
                        var indivGradeElements = Array.from(document.querySelectorAll('input.indGrade'));
                        var indivGradeValues = [];
                        var totalIndivGrade = 0;
            
                        //Loops through every value from the input of indiv Grade Elements and pushes them to the array.
                        for (var i = 0; i < indivGradeElements.length; i++) {
                            var indivGradeElement = indivGradeElements[i];
                            indivGradeValues.push(indivGradeElement.value);
                            // console.log(indivGradeElement.value);
                        }
            
                        //Loops through each value and adds the total length of how many inputs there are to total indiv grade
                        for (var j = 0; j < indivGradeValues.length; j++) {
                            var indivGradeValue = parseFloat(indivGradeValues[j]);
                            if (isNaN(indivGradeValue)) continue; // <--- checks for any null values 
                            totalIndivGrade += indivGradeValue;
                        }
            
                        //Simply gets the average of the two.
                        var indivGradeAverage = totalIndivGrade / indivGradeValues.length

            



            if (majorGradeAverage && minorGradeAverage && indivGradeAverage) {
                // If all grades are valid, calculate the weighted average
                this.finalGrade = ((mWeight * majorGradeAverage) + (minWeight * minorGradeAverage) + (indWeight * indivGradeAverage)) / 100;

                    this.finalGrade = this.finalGrade.toFixed(2) + "%";
            } else {
                console.log("THERE IS AN INVALID THING");
                // If any of the grades are missing or invalid, return NaN
                return NaN;
            }
            // console.log(this.finalGrade + " is your final grade!");




        },

        addMajorGrade: function () {

            var newGrade = `
            <div class="row" id="MajorGrade">
                <label class="col-4 col-form-label">Input Major Assessment Grades:</label> 
                <div class="col-8">
                <input type="number" class="majorGrade form-control" min="1" max="100" v-model="majorGrade">
                </div>
            </div> `;

            var originalDiv = document.getElementById('MajorGrade');
            originalDiv.insertAdjacentHTML('afterend', newGrade);
        },
        addMinorGrade: function () {

            var newGrade = `
            <div class="row" id="MinorGrade">
                <label class="col-4 col-form-label">Input Minor Assessment Grades:</label>
                <div class="col-8">
                  <input type="number" class="minorGrade form-control" min="1" max="100" v-model="minorGrade">
                </div>
              </div> `;

            var originalDiv = document.getElementById('MinorGrade');
            originalDiv.insertAdjacentHTML('afterend', newGrade);
        },
        addIndivGrade: function () {

            var newGrade = `
            <div class="row" id="IndGrade">
                <label class="col-4 col-form-label">Input Individual Work Grades:</label>
                <div class="col-8">
                  <input type="number" class="indGrade form-control" min="1" max="100" v-model="indGrade">
                </div>
              </div>`;

            var originalDiv = document.getElementById('IndGrade');
            originalDiv.insertAdjacentHTML('afterend', newGrade);
            this.totalIndiv++;
        }



    }



})

vue_app.mount("#vue_app")

