var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    res.json(
        {
        "forms": [
          {
            "url": "http://pokeapi.co/api/v2/pokemon-form/20/",
            "name": "raticate"
          }
        ],
        "abilities": [
          {
            "slot": 3,
            "is_hidden": true,
            "ability": {
              "url": "http://pokeapi.co/api/v2/ability/55/",
              "name": "hustle"
            }
          },
          {
            "slot": 2,
            "is_hidden": false,
            "ability": {
              "url": "http://pokeapi.co/api/v2/ability/62/",
              "name": "guts"
            }
          },
          {
            "slot": 1,
            "is_hidden": false,
            "ability": {
              "url": "http://pokeapi.co/api/v2/ability/50/",
              "name": "run-away"
            }
          }
        ],
        "stats": [
          {
            "stat": {
              "url": "http://pokeapi.co/api/v2/stat/6/",
              "name": "speed"
            },
            "effort": 2,
            "base_stat": 97
          },
          {
            "stat": {
              "url": "http://pokeapi.co/api/v2/stat/5/",
              "name": "special-defense"
            },
            "effort": 0,
            "base_stat": 70
          },
          {
            "stat": {
              "url": "http://pokeapi.co/api/v2/stat/4/",
              "name": "special-attack"
            },
            "effort": 0,
            "base_stat": 50
          },
          {
            "stat": {
              "url": "http://pokeapi.co/api/v2/stat/3/",
              "name": "defense"
            },
            "effort": 0,
            "base_stat": 60
          },
          {
            "stat": {
              "url": "http://pokeapi.co/api/v2/stat/2/",
              "name": "attack"
            },
            "effort": 0,
            "base_stat": 81
          },
          {
            "stat": {
              "url": "http://pokeapi.co/api/v2/stat/1/",
              "name": "hp"
            },
            "effort": 0,
            "base_stat": 55
          }
        ],
        "name": "raticate",
        "weight": 185,
        "moves": [
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/14/",
              "name": "swords-dance"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/15/",
              "name": "cut"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/29/",
              "name": "headbutt"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/33/",
              "name": "tackle"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/34/",
              "name": "body-slam"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/36/",
              "name": "take-down"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/38/",
              "name": "double-edge"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/39/",
              "name": "tail-whip"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 10,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/44/",
              "name": "bite"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/46/",
              "name": "roar"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/55/",
              "name": "water-gun"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/58/",
              "name": "ice-beam"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/59/",
              "name": "blizzard"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/61/",
              "name": "bubble-beam"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/63/",
              "name": "hyper-beam"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/68/",
              "name": "counter"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/70/",
              "name": "strength"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/85/",
              "name": "thunderbolt"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/86/",
              "name": "thunder-wave"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/87/",
              "name": "thunder"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/91/",
              "name": "dig"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/92/",
              "name": "toxic"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 4,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/98/",
              "name": "quick-attack"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/99/",
              "name": "rage"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/102/",
              "name": "mimic"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/104/",
              "name": "double-team"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/111/",
              "name": "defense-curl"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 27,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 27,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 7,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/116/",
              "name": "focus-energy"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/117/",
              "name": "bide"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/129/",
              "name": "swift"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/130/",
              "name": "skull-bash"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/156/",
              "name": "rest"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 14,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 14,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 16,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/158/",
              "name": "hyper-fang"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 41,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 41,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/162/",
              "name": "super-fang"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/2/",
                  "name": "yellow"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/1/",
                  "name": "red-blue"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/164/",
              "name": "substitute"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/168/",
              "name": "thief"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/173/",
              "name": "snore"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/174/",
              "name": "curse"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/182/",
              "name": "protect"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/184/",
              "name": "scary-face"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/189/",
              "name": "mud-slap"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/196/",
              "name": "icy-wind"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/203/",
              "name": "endure"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/207/",
              "name": "swagger"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/213/",
              "name": "attract"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/214/",
              "name": "sleep-talk"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/216/",
              "name": "return"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/218/",
              "name": "frustration"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 30,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/228/",
              "name": "pursuit"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/231/",
              "name": "iron-tail"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/237/",
              "name": "hidden-power"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/240/",
              "name": "rain-dance"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/241/",
              "name": "sunny-day"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/242/",
              "name": "crunch"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/247/",
              "name": "shadow-ball"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/4/",
                  "name": "crystal"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/3/",
                  "name": "gold-silver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/249/",
              "name": "rock-smash"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/253/",
              "name": "uproar"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/263/",
              "name": "facade"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/269/",
              "name": "taunt"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 50,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 50,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 50,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 50,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 50,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 44,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/283/",
              "name": "endeavor"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/290/",
              "name": "secret-power"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/343/",
              "name": "covet"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/13/",
                  "name": "xd"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/12/",
                  "name": "colosseum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/7/",
                  "name": "firered-leafgreen"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/6/",
                  "name": "emerald"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/5/",
                  "name": "ruby-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/351/",
              "name": "shock-wave"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/363/",
              "name": "natural-gift"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/365/",
              "name": "pluck"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/369/",
              "name": "u-turn"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/372/",
              "name": "assurance"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/387/",
              "name": "last-resort"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                  "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/389/",
              "name": "sucker-punch"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/416/",
              "name": "giga-impact"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                  "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/428/",
              "name": "zen-headbutt"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/445/",
              "name": "captivate"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/447/",
              "name": "grass-knot"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/8/",
                  "name": "diamond-pearl"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/9/",
                  "name": "platinum"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/10/",
                  "name": "heartgold-soulsilver"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/451/",
              "name": "charge-beam"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/496/",
              "name": "round"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/514/",
              "name": "retaliate"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/526/",
              "name": "work-up"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/11/",
                  "name": "black-white"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/14/",
                  "name": "black-2-white-2"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/528/",
              "name": "wild-charge"
            }
          },
          {
            "version_group_details": [
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/16/",
                  "name": "omega-ruby-alpha-sapphire"
                }
              },
              {
                "move_learn_method": {
                  "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                  "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                  "url": "http://pokeapi.co/api/v2/version-group/15/",
                  "name": "x-y"
                }
              }
            ],
            "move": {
              "url": "http://pokeapi.co/api/v2/move/590/",
              "name": "confide"
            }
          }
        ],
        "sprites": {
          "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/20.png",
          "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/20.png",
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
          "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/20.png",
          "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/20.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/20.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png"
        },
        "held_items": [
          {
            "item": {
              "url": "http://pokeapi.co/api/v2/item/132/",
              "name": "oran-berry"
            },
            "version_details": [
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/11/",
                  "name": "leafgreen"
                },
                "rarity": 50
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/10/",
                  "name": "firered"
                },
                "rarity": 50
              }
            ]
          },
          {
            "item": {
              "url": "http://pokeapi.co/api/v2/item/135/",
              "name": "sitrus-berry"
            },
            "version_details": [
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/11/",
                  "name": "leafgreen"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/10/",
                  "name": "firered"
                },
                "rarity": 5
              }
            ]
          },
          {
            "item": {
              "url": "http://pokeapi.co/api/v2/item/177/",
              "name": "chilan-berry"
            },
            "version_details": [
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/18/",
                  "name": "white"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/17/",
                  "name": "black"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/16/",
                  "name": "soulsilver"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/15/",
                  "name": "heartgold"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/14/",
                  "name": "platinum"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/13/",
                  "name": "pearl"
                },
                "rarity": 5
              },
              {
                "version": {
                  "url": "http://pokeapi.co/api/v2/version/12/",
                  "name": "diamond"
                },
                "rarity": 5
              }
            ]
          }
        ],
        "location_area_encounters": "/api/v2/pokemon/20/encounters",
        "height": 7,
        "is_default": true,
        "species": {
          "url": "http://pokeapi.co/api/v2/pokemon-species/20/",
          "name": "raticate"
        },
        "id": 20,
        "order": 26,
        "game_indices": [
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/22/",
              "name": "white-2"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/21/",
              "name": "black-2"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/18/",
              "name": "white"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/17/",
              "name": "black"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/16/",
              "name": "soulsilver"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/15/",
              "name": "heartgold"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/14/",
              "name": "platinum"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/13/",
              "name": "pearl"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/12/",
              "name": "diamond"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/11/",
              "name": "leafgreen"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/10/",
              "name": "firered"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/9/",
              "name": "emerald"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/8/",
              "name": "sapphire"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/7/",
              "name": "ruby"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/6/",
              "name": "crystal"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/5/",
              "name": "silver"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/4/",
              "name": "gold"
            },
            "game_index": 20
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/3/",
              "name": "yellow"
            },
            "game_index": 166
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/2/",
              "name": "blue"
            },
            "game_index": 166
          },
          {
            "version": {
              "url": "http://pokeapi.co/api/v2/version/1/",
              "name": "red"
            },
            "game_index": 166
          }
        ],
        "base_experience": 145,
        "types": [
          {
            "slot": 1,
            "type": {
              "url": "http://pokeapi.co/api/v2/type/1/",
              "name": "normal"
            }
          }
        ]
      }
    );
});


/* GET pokemon listing. */
router.get('/', function(req, res, next) {
    res.json(
        {
          "count": 811,
          "previous": null,
          "results": [
            {
              "url": "http://pokeapi.co/api/v2/pokemon/1/",
              "name": "bulbasaur"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/2/",
              "name": "ivysaur"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/3/",
              "name": "venusaur"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/4/",
              "name": "charmander"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/5/",
              "name": "charmeleon"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/6/",
              "name": "charizard"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/7/",
              "name": "squirtle"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/8/",
              "name": "wartortle"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/9/",
              "name": "blastoise"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/10/",
              "name": "caterpie"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/11/",
              "name": "metapod"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/12/",
              "name": "butterfree"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/13/",
              "name": "weedle"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/14/",
              "name": "kakuna"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/15/",
              "name": "beedrill"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/16/",
              "name": "pidgey"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/17/",
              "name": "pidgeotto"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/18/",
              "name": "pidgeot"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/19/",
              "name": "rattata"
            },
            {
              "url": "http://pokeapi.co/api/v2/pokemon/20/",
              "name": "raticate"
            }
          ],
          "next": "http://pokeapi.co/api/v2/pokemon/?offset=20"
        }
    );
});




module.exports = router;
