//news.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
      {
        id: "1",
        title: "Software idea",
        text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      },
      {
        id: "2",
        title: "Arcadeautomat",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur lacus id nibh accumsan, sit amet ornare enim mollis. Sed eu sagittis tellus. Donec semper sapien magna, ac ultricies sem gravida vel. Morbi nec turpis vestibulum, ultricies est eget, ultricies magna. Sed id luctus nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus non porta eros, dapibus porta lectus. Nulla eget orci sagittis, placerat felis eget, feugiat mauris. Nullam vehicula ex dui, nec venenatis magna tincidunt sed. Aliquam sit amet ultricies sem. Curabitur fringilla metus sed erat sodales ornare. Ut id scelerisque nisi. Quisque.",
      },
      {
        id: "3",
        title: "Personen",
        text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex",
      },
    ]);
  });
  

module.exports = router;