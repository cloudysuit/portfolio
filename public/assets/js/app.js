// var stickyHeader = $(".header").offset().top;


// $(window).scroll(function(){
// 	if ($(window).scrollTop() > stickyHeader){
// 		$(".header").addClass("affix");
// 	}

// 	else {
// 		$(".header").removeClass("affix");
// 	}
// });

$(document).ready(function(){
     $(".thumbs").click(function(){
        $(".mainImage img").attr("src", this.src)
        console.log(this.src);
    });
 });
 




//main page gallery 

jQuery(document).ready(function() {
     jQuery('#slider-container').cubeportfolio({
       filters: '#js-filters-awesome-work',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'bounceLeft',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },

        plugins: {
            loadMore: {
                selector: '#js-loadMore-awesome-work',
                action: 'click',
                loadItems: 3,
            }
        },
    });


   
});


//pieces gallery 

