$(document).ready(function(){

    var explosion = [];

    function writeDOM(){
        var domString = "";
        for(var i=0; i<explosion.length; i++){
          if(i%3===0){
            domString += `<div class="container">`
            domString += `<div class="row">`;
          }
          domString += `<div class="col-md-4">`;
          domString += `<h1>${explosion[i].name}</h1>`;
          domString += `<section>${explosion[i].description}</section>`;
          domString += `</div>`;
          if(i%3===2){
            domString += `</div>`;
            domString += `</div>`;
          }
        }
        $(".output").append(domString);
    }

//pyramid of dooom
    // $.ajax("./db/dinosaurs1.json").done(function(data1){
    //     console.log("data1", data1.dinosaurs1);
    //     dinosaurs = data1.dinosaurs1;
    //     $.ajax("./db/dinosaurs2.json").done(function(data2){
    //         console.log("data2", data2.dinosaurs2);
    //         data2.dinosaurs2.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         });
    //         $.ajax("./db/dinosaurs3.json").done(function(data3){
    //         console.log("data3", data3.dinosaurs3);
    //         data3.dinosaurs3.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         });
    //         writeDOM();
    //     }).fail(function(error3){
    //         console.log(error3);
    //     });
    //     }).fail(function(error2){
    //         console.log(error2);
    //     });
    // }).fail(function(error1){
    //     console.log(error1);
    // });

//iife, like a getter
var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./json/categories.json").done(function(dataCat){
			resolve(dataCat.categories);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var secondDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./json/products.json").done(function(dataProd){
			resolve(dataProd.products);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

var thirdDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./json/types.json").done(function(dataType){
			resolve(dataType.types);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

//main.js
// firstDinosaurJSON().then(function(jsonData1){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

// secondDinosaurJSON().then(function(jsonData2){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

// thirdDinosaurJSON().then(function(jsonData1){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()])
		.then(function(resultz){
			console.log("resultz", resultz);
			resultz.forEach(function(ajaxCalls){
				ajaxCalls.forEach(function(firework){
					explosion.push(firework);
				});
			});
			writeDOM();
		});
});
