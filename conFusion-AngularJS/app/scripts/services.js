'use strict';

angular.module('confusionApp')

        .constant("baseURL","http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

                this.getDishes = function(){
                    return $resource(baseURL+"dishes/:id", null,
                      {'update':{method:'PUT'}});
                };

                this.getPromotions = function(){
                  return $resource(baseURL+"promotions/:id");
                };

                // $http
                // this.getDish = function (index) {
                //
                //     return $http.get(baseURL+"dishes/"+index);
                // };


        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
            var corpfac = {};

            corpfac.getLeaders = function (){
              return $resource(baseURL+"leadership/:id");
            };

            return corpfac;

          }])


       .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {

         this.getFeedback = function(){
            return $resource(baseURL+"feedback/:id");
            //  return $resource(baseURL+ "feedback/:id", null,
            //    {'create':{method:'POST'}});
         };

       }])


;
