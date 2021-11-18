// Natsu Deguchi

const Black = 0;
const Red = 1;
const Grey = 2;


let selThumbId = 0;
let selcolorId = 0;
const imagesSrc = [
    ['images/t-shirt-black-no-model.jpg', 'images/t-shirt-black-front.jpg', 'images/t-shirt-black-back.jpg'],
    ['images/t-shirt-red-no-model.jpg', 'images/t-shirt-red-front.jpg', 'images/t-shirt-red-back.jpg'],
    ['images/t-shirt-grey-no-model.jpg', 'images/t-shirt-grey-front.jpg', 'images/t-shirt-grey-back.jpg']
];


const $slide = $('#slide');
const $thumbs = $('.th');
const $thumbNoModel = $('#th-no-model a');
const $thumbFront = $('#th-front a');
const $thumbBack = $('#th-back a');
const $thumbNoModelImg = $('#th-no-model img');
const $thumbFrontImg = $('#th-front img');
const $thumbBackImg = $('#th-back img');

const $color = $('.color input');
const $size = $('.size input');

const $addToCart = $('#add-to-cart');

const $selectedColorOut = $('#selected-color-out');
const $selectedSizeOut = $('#selected-size-out');


$thumbNoModel.click({thumbId: Black}, updateThumbSelectedId);
$thumbFront.click({thumbId: Red}, updateThumbSelectedId);
$thumbBack.click({thumbId: Grey}, updateThumbSelectedId);


$color.on('change', function(){
    if($(this).is(':checked')){
        switch(this.value)
        {
            case 'black':
                selcolorId = 0;
                break;
            case 'red':
                selcolorId = 1;
                break;
            case 'grey':
                selcolorId = 2;
                break;
        }
        updateSlideImg();
        updateThumbImg();

        $selectedColorOut.html((this.value));
    }
});



$size.on('change', function(){
    if($(this).is(':checked')){
        $selectedSizeOut.html((this.value));
        $addToCart.removeAttr('disabled');
    }
});


function updateThumbSelectedId(event)
{
    if(selThumbId != event.data.thumbId)
    {
        selThumbId = event.data.thumbId;
        updateSlideImg();
    }

     event.preventDefault();
}

function updateSlideImg()
{
    $slide.attr('src', imagesSrc[selcolorId][selThumbId]);
};

function updateThumbImg()
{
    $thumbNoModelImg.attr('src', imagesSrc[selcolorId][Black]);
    $thumbFrontImg.attr('src', imagesSrc[selcolorId][Red]);
    $thumbBackImg.attr('src', imagesSrc[selcolorId][Grey]);

};


