var express = require('express');
var router = express.Router();
var ctrlMekanlar=require('../controllers/mekanlar');
var ctrlDigerleri=require('../controllers/digerleri');

router.get('/', ctrlMekanlar.anaSayfa);
router.get('/mekan/:mekanid', ctrlMekanlar.mekanBilgisi);

router.get('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumEkle); // yorum ekle sayfasını çağırır
router.post('/mekan/:mekanid/yorum/yeni', ctrlMekanlar.yorumumuEkle); // yorum ekle sayfasında yorum ekle butonuna basılınca bu çalışır

/** Ortak yolları bu şekilde de tanımlayabilirsin. 
router
.route('/mekan/:mekanid/yorum/yeni')
.get(ctrlMekanlar.yorumEkle)
.post(ctrlMekanlar.yorumumuEkle)
*/

router.get('/hakkinda', ctrlDigerleri.hakkinda);
module.exports = router;
