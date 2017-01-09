/**
 * Created by Divya Chopra on 1/5/2017.
 */
var dataFac = angular.module('trivia');

dataFac.factory('DataService',DataFactory);

function DataFactory(){
    var dataObj = {
        triviaData:monumentsData,
        quizQuestions:quizQuestions,
        correctAnswers:correctAnswers
    };

    return dataObj;
}
var correctAnswers =[1,2,0,2,1,0,2,3,1,2];
var quizQuestions =[
    {
        type: "text",
        text: "When was Wat Phra Si Sanphet, Thailand built?",
        possibilities: [
            {
                answer: "1548 AD"
            },
            {
                answer: "1448 AD"
            },
            {
                answer: "1558 AD"
            },
            {
                answer: "1458 AD"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "Where is Angkor Wat located on map?",
        possibilities: [
            {
                answer: "India"
            },
            {
                answer: "Sri Lanka"
            },
            {
                answer: "Cambodia"
            },
            {
                answer: "Thailand"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "image",
        text: "Which of the following is a temple situated in Thailand?",
        possibilities: [
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/sunny.jpg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Petra-by-Night-in-Jordan.-by-Fadi-Bargoti-740x494.jpeg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Angkor-Wat-by-Chaluntorn-Preeyasombat-740x492.jpeg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/guijt.jpg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "image",
        text: "Which of the following is Hagia Sophia, a famous museum situated in Istanbul, Turkey ?",
        possibilities: [
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/elia.jpg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/guijt.jpg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/yonka.jpg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/elia.jpg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "Which Mughal Emperor built Taj Mahal",
        possibilities: [
            {
                answer: "Akbar"
            },
            {
                answer: "Shah Jahan"
            },
            {
                answer: "Aurangzeb"
            },
            {
                answer: "Humayun"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: " Which of the following has served as a cathedral, mosque and now a museum? ",
        possibilities: [
            {
                answer: "Hagia Sophia, Istanbul"
            },
            {
                answer: "Fatih Mosque, Istanbul"
            },
            {
                answer: "Sultan Ahmed Mosque, Istanbul"
            },
            {
                answer: "Alâeddin Mosque, Konya"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "When was Leaning Tower of Pissa Built?",
        possibilities: [
            {
                answer: "1352"
            },
            {
                answer: "1252"
            },
            {
                answer: "1372"
            },
            {
                answer: "1272"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "image",
        text: "Which of the following is the Colosseum,Italy?",
        possibilities: [
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/sunny.jpg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/yonka.jpg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Giza-Pyramids-by-Quim-Granell.jpeg"
            },
            {
                answer: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/elia.jpg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "Which of the following is known as \"Rose of the desert\"?",
        possibilities: [
            {
                answer: "Qasr Amra, Jordan"
            },
            {
                answer: "Petra, Jordan"
            },
            {
                answer: "Al-Karak, Jordan"
            },
            {
                answer: "Hagia Sophia, Turkey"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "Which of the following is oldest of the seven wonders of ancient world?",
        possibilities: [
            {
                answer: "Statue of Zeus at Olympia"
            },
            {
                answer: "Temple of Artemis"
            },
            {
                answer: "Great Pyramid of Giza"
            },
            {
                answer: "Hanging Gardens of Babylon"
            }
        ],
        selected: null,
        correct: null
    }

];
var monumentsData = [
    {
        type: "Taj Mahal"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/guijt.jpg"
        , locations: "Agra,India"
        , built: "1648"
        , description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal."
    }
    , {
        type: "Hagia Sophia"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/yonka.jpg"
        , locations: "Istanbul,Turkey"
        , built: "537"
        , description: "At the beginning of its construction in 532 it was a basilica, later it became a mosque and now this beauty serves as a museum.From its initial conversion until the construction of the nearby Sultan Ahmed Mosque (Blue Mosque of Istanbul) in 1616, it was the principal mosque of Istanbul. The Byzantine architecture of the Hagia Sophia served as inspiration for many other Ottoman mosques"
    }
    , {
        type: " Petra"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Petra-by-Night-in-Jordan.-by-Fadi-Bargoti-740x494.jpeg"
        , locations: "Jordan"
        , built: "300 BC"
        , description: "Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the \"Rose City.\" Perhaps its most famous structure is Al Khazneh, a temple with an ornate, Greek-style facade."
    }
    , {
        type: "The Great Pyramid of Giza"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Giza-Pyramids-by-Quim-Granell.jpeg"
        , locations: "El Giza, Egypt"
        , built: "2580–2560 BC"
        , description: "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex bordering what is now El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact."
    }
    , {
        type: "Machu Pichu"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/stephen.jpg"
        , locations: "Peru"
        , built: "1450 AD"
        , description: " The city was built in 15th-century and is the most exciting heritage of the Inca civilization. The fabulous landscape opens from the spot.The Incas built the estate around 1450 but abandoned it a century later at the time of the Spanish Conquest."
    }
    , {
        type: "The Colosseum"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/elia.jpg"
        , locations: "Rome,Italy"
        , built: "80 AD"
        , description: "The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built"
    }
    ,{
        type: "Wat Phra Si Sanphet"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2013/05/sunny.jpg"
        , locations: "Thailand"
        , built: "1448 AD"
        , description: "Wat Phra Si Sanphet (\"Temple of the Holy, Splendid Omniscient\") was the holiest temple on the site of the old Royal Palace in Thailand's ancient capital of Ayutthaya until the city was completely destroyed by the Burmese in 1767.It was the grandest and most beautiful temple in the capital and it served as a model for Wat Phra Kaeo in Bangkok."
    }
    , {
        type: "Leaning tower of Pissa"
        , image_url: "https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg"
        , locations: "Pissa,Italy"
        , built: "1372"
        , description: "The Leaning Tower of Pisa or is the freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt.It is situated behind Pisa's cathedral and is the third oldest structure in the city\'s Cathedral Square  after the cathedral and the Pisa Baptistry. The tower\'s tilt began during construction, caused by an inadequate foundation on ground too soft on one side to properly support the structure's weight."
    }
    , {
        type: "Angkor Wat"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Angkor-Wat-by-Chaluntorn-Preeyasombat-740x492.jpeg"
        , locations: "Cambodia"
        , built: "12th century AD"
        , description: "Angkor Wat (\"Capital Temple\") is a temple complex in Cambodia and the largest religious monument in the world, with the site measuring 162.6 hectares (1,626,000 m2; 402 acres). It was originally constructed as a Hindu temple of god Vishnu for the Khmer Empire, gradually transforming into a Buddhist temple toward the end of the 12th century."
    }
    , {
        type: "Moai, Easter Island"
        , image_url: "https://www.placestoseeinyourlifetime.com/wp-content/uploads/2015/07/Easter-Island-by-Kelvin-Zhang-740x493.jpeg"
        , locations: "Easter Island, Polynesia"
        , built: "1250-1500 AD"
        , description: "The moai are monolithic statues, their minimalist style related to forms found throughout Polynesia.The production and transportation of the more than 900 statues are considered remarkable creative and physical feats.n addition to representing deceased ancestors, the moai, once they were erected on ahu, may also have been regarded as the embodiment of powerful living or former chiefs and important lineage status symbols."
    }
];