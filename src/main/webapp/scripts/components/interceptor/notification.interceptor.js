 'use strict';

angular.module('jkutnerJhipsterApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jkutnerJhipsterApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jkutnerJhipsterApp-params')});
                }
                return response;
            }
        };
    });
