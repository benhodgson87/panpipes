/**
 * Most songs can't be embedded due to licensing restrictions.
 * PANPIPE COVERS HOWEVER...
 */

var songs = [
  {
    youtube: "7jyY3e5FbZA",
    artist: "Robbie Williams",
    title: "Angels",
  },
  {
    youtube: "at2agJwFYv8",
    artist: "Celine Dion",
    title: "My Heart Will Go On",
  },
  {
    youtube: "xGl8khPZovI",
    artist: "Elton John",
    title: "Candle In The Wind",
  },
  {
    youtube: "JXxBxQei6kc",
    artist: "The Beatles",
    title: "Yesterday",
  },
  {
    youtube: "sKvHodnZkkQ",
    artist: "Adele",
    title: "When We Were Young"
  },
  {
    youtube: "Andt08xgQMw",
    artist: "Rod Stewart",
    title: "Sailing"
  },
  {
    youtube: "wqukhEXIhfU",
    artist: "Seal",
    title: "Kiss from a Rose"
  },
  {
    youtube: "8FlPwmw63bY",
    artist: "Frank Sinatra",
    title: "My Way"
  },
  {
    youtube: "sDC25q2booM",
    artist: "John Lennon",
    title: "Imagine"
  },
  {
    youtube: "CnzTLOdaaGA",
    artist: "Eric Clapton",
    title: "Tears In Heaven"
  },
  {
    youtube: "BNzZfTPocUQ",
    artist: "Whitney Houston",
    title: "I Will Always Love You"
  }
]

var ref = {
  song: document.querySelector('.js-song'),
  artistName: document.querySelector('.js-song-artist'),
  songTitle: document.querySelector('.js-song-title'),
  shuffleControl: document.querySelector('.js-shuffle-control'),
  player: document.querySelector('.js-player-container'),
}

var updateTitle = function(artist, title) {
  ref.artistName.innerText = artist
  ref.songTitle.innerText = title
}

var updatePlayer = function (id) {
  var url = 'http://www.youtube.com/embed/' + id + '?&autoplay=1&rel=0&fs=0&showinfo=0&disablekb=1&modestbranding=1&autohide=0&color=white'
  var embedCode = '<iframe width="100%" height="200" src="' + url + ' " frameborder="0" allowfullscreen></iframe>'

  ref.player.innerHTML = embedCode
}

var applyNewSong = function(song) {
  // Pretend this is cleverer than it is
  var randLow = 250,
      randHigh = 1250

  setTimeout(function() {
    updatePlayer(song.youtube)
    updateTitle(song.artist, song.title)
    ref.song.classList.add('is-loaded')
  }, Math.floor(Math.random() * randHigh) + randLow)
}

var selectSong = function() {
  return songs[Math.floor(Math.random() * songs.length)]
}

var generateNewSong = function() {
  var song = selectSong()
  ref.song.classList.remove('is-loaded')
  applyNewSong(song)
}

var start = function() {
  var song = selectSong()
  applyNewSong(song)
}

ref.shuffleControl.addEventListener('click', generateNewSong, false)

start()
