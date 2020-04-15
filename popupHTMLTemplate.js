const popupHTMLTemplate = `
<div class="popup-fixed-container">
  <div class="popup-padding-wrapper">
  <div class="location-header">{{name}}, {{st_stusps}}</div>

  <div class="overall-rating-container">
     <div class="title-and-number-container">
      <div class="rating-title">OVERALL RATING</div>
    </div>
    <div class="title-and-number-container overall">
      <div class="rating-title overall">{{prep_level}}</div>
      <div class="rating-number">{{prep_score}}</div>
    </div>
    <div class='gradient-container'>
      <div style="-webkit-transform: translateX(-12px)">
        <div class='gradient' />
      </div>
    </div>
  </div>
  
<!-- GENERATED FIELDS GO HERE: -->

</div>
</div>



`
