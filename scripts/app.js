// document.load(function(){
  // hide all questions except first question
  // hide all info panels
  // work out progress bar length
// })

// $('.yes-btn').click(fucntion(){
  // hide current question
  // show next question
  // work out progress bar length
// })

// $('.no-btn').click(function(){
  // show the info screen
  // add info with same index to feedback screen
// })

// $('continue-btn').click(function(){
  // hide the info screen
  // show next question
  // work out progress bar length
// })

$(window).on('load', function(){
    loaded();
});

function loaded(){
  // $('#loader').addClass('hidden');
  $('#loader').fadeOut('slow')
}



var currentIndex = 0;
var items = $('.question-container');
var itemAmt = items.length;
var progress = $('.progress-bar');
var infos = $('.info');
var infoAmt = infos.length;

var feedback = $('.info-feed');
var feedbackAmt = feedback.length;

var overflow = $('#body');

function progressLength() {
  var length = ((currentIndex + 1) / itemAmt) * 100;
  var lengthPercent = length + '%';
  progress.css('width', lengthPercent);
 }

function cycleItems() {
  var item = $('.question-container').eq(currentIndex);
  items.addClass('inactive');
  // items.hide();
  item.removeClass('inactive');
  // item.show();
}

function removeOverflow() {
  if (currentIndex == itemAmt - 1) {
    overflow.removeClass('question-screen');
  }
  console.log(currentIndex);
  console.log(itemAmt -1);
}

function showInfo() {
  var infoItem = infos[currentIndex];
  $(infoItem).removeClass('hidden');
  $(infoItem).attr('aria-hidden', 'false');

}

function hideInfo() {
  var infoItem = infos[currentIndex];
  $(infoItem).addClass('hidden');
  $(infoItem).attr('aria-hidden', 'true');

}
function showNext() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
}

function showFeedback() {
  var feedbackItem = feedback[currentIndex];
  var count = $('.inactive').length;
  $(feedbackItem).removeClass('inactive');
  // console.log(currentIndex);
  // console.log(count);

}



$('.yes-btn').click(function() {
  showNext();
  cycleItems();
  progressLength();
  removeOverflow();
});

$('.no-btn').click(function(){
  showInfo();
  showFeedback();
});

$('.continue-btn').click(function(){
  hideInfo();
  showNext();
  cycleItems();
  progressLength();
  removeOverflow();
})

cycleItems();
progressLength();
// hideInfo();
// console.log(feedbackItem);
