'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('moves', [
      {
        id: 1,
        name: "pound",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 40
      },
      {
        id: 2,
        name: "karate-chop",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts regular damage.  User's critical hit rate is one level higher when using this move.",
        accuracy: 100,
        power: 50
      },
      {
        id: 3,
        name: "double-slap",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
        accuracy: 85,
        power: 15
      },
      {
        id: 4,
        name: "comet-punch",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
        accuracy: 85,
        power: 18
      },
      {
        id: 5,
        name: "mega-punch",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 85,
        power: 80
      },
      {
        id: 6,
        name: "pay-day",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  After the battle ends, the winner receives five times the user's level in extra money for each time this move was used.",
        accuracy: 100,
        power: 40
      },
      {
        id: 7,
        name: "fire-punch",
        type_id: 7,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to burn the target.",
        accuracy: 100,
        power: 75
      },
      {
        id: 8,
        name: "ice-punch",
        type_id: 12,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to freeze the target.",
        accuracy: 100,
        power: 75
      },
      {
        id: 9,
        name: "thunder-punch",
        type_id: 4,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to paralyze the target.",
        accuracy: 100,
        power: 75
      },
      {
        id: 10,
        name: "scratch",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 40
      },
      {
        id: 11,
        name: "vice-grip",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 55
      },
      {
        id: 12,
        name: "guillotine",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts damage equal to the target's max HP.  Ignores accuracy and evasion modifiers.  This move's accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail. Because this move inflicts a specific and finite amount of damage, endure still prevents the target from fainting. The effects of lock on, mind reader, and no guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through detect or protect.",
        accuracy: 30,
        power: null
      },
      {
        id: 13,
        name: "razor-wind",
        type_id: 13,
        category_id: 2,
        effect: "Inflicts regular damage.  User's critical hit rate is one level higher when using this move.  User charges for one turn before attacking. This move cannot be selected by sleep talk.",
        accuracy: 100,
        power: 80
      },
      {
        id: 14,
        name: "swords-dance",
        type_id: 13,
        category_id: 3,
        effect: "Raises the user's Attack by two stages.",
        accuracy: null,
        power: null
      },
      {
        id: 15,
        name: "cut",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 95,
        power: 50
      },
      {
        id: 16,
        name: "gust",
        type_id: 8,
        category_id: 2,
        effect: "Inflicts regular damage. If the target is under the effect of bounce, fly, or sky drop, this move will hit with double power.",
        accuracy: 100,
        power: 40
      },
      {
        id: 17,
        name: "wing-attack",
        type_id: 8,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 60
      },
      {
        id: 18,
        name: "whirlwind",
        type_id: 13,
        category_id: 3,
        effect: "Switches the target out for another of its trainer's Pokémon selected at random.  Wild battles end immediately. Doesn't affect Pokémon with suction cups or under the effect of ingrain.",
        accuracy: null,
        power: null
      },
      {
        id: 19,
        name: "fly",
        type_id: 8,
        category_id: 1,
        effect: "Inflicts regular damage.  User flies high into the air for one turn, becoming immune to attack, and hits on the second turn. During the immune turn, gust, hurricane, sky uppercut, smack down, thunder, twister, and whirlwind still hit the user normally.  gust and twister also have double power against the user. The damage from hail and sandstorm still applies during the immune turn. The user may be hit during its immune turn if under the effect of lock on, mind reader, or no guard. This move cannot be used while gravity is in effect. This move cannot be selected by sleep talk.",
        accuracy: 95,
        power: 90
      },
      {
        id: 20,
        name: "bind",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use. rapid spin cancels this effect.",
        accuracy: 85,
        power: 15
      },
      {
        id: 21,
        name: "slam",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 75,
        power: 80
      },
      {
        id: 22,
        name: "vine-whip",
        type_id: 10,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 45
      },
      {
        id: 23,
        name: "stomp",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to make the target flinch. Power is doubled against Pokémon that have used minimize since entering the field.",
        accuracy: 100,
        power: 65
      },
      {
        id: 24,
        name: "double-kick",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts regular damage. Hits twice in one turn.",
        accuracy: 100,
        power: 30
      },
      {
        id: 25,
        name: "mega-kick",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 75,
        power: 120
      },
      {
        id: 26,
        name: "jump-kick",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts regular damage. If this move misses, is blocked by protect or detect, or has no effect, the user takes damage equal to half of its max HP rounded down. This move cannot be used while gravity is in effect.",
        accuracy: 95,
        power: 100
      },
      {
        id: 27,
        name: "rolling-kick",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to make the target flinch.",
        accuracy: 85,
        power: 60
      },
      {
        id: 28,
        name: "sand-attack",
        type_id: 11,
        category_id: 3,
        effect: "Lowers the target's accuracy by one stage.",
        accuracy: 100,
        power: null
      },
      {
        id: 29,
        name: "headbutt",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to make the target flinch.",
        accuracy: 100,
        power: 70
      },
      {
        id: 30,
        name: "horn-attack",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 65
      },
      {
        id: 31,
        name: "fury-attack",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
        accuracy: 85,
        power: 15
      },
      {
        id: 32,
        name: "horn-drill",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts damage equal to the target's max HP.  Ignores accuracy and evasion modifiers.  This move's accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail. Because this move inflicts a specific and finite amount of damage, endure still prevents the target from fainting. The effects of lock on, mind reader, and no guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through detect or protect.",
        accuracy: 30,
        power: null
      },
      {
        id: 33,
        name: "tackle",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 40
      },
      {
        id: 34,
        name: "body-slam",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to paralyze the target.",
        accuracy: 100,
        power: 85
      },
      {
        id: 35,
        name: "wrap",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use. rapid spin cancels this effect.",
        accuracy: 90,
        power: 15
      },
      {
        id: 36,
        name: "take-down",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  User takes 1/4 the damage it inflicts in recoil.",
        accuracy: 85,
        power: 90
      },
      {
        id: 37,
        name: "thrash",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  User is forced to attack with this move for 2–3 turns,selected at random.  After the last hit, the user becomes confused. safeguard does not protect against the confusion from this move.",
        accuracy: 100,
        power: 120
      },
      {
        id: 38,
        name: "double-edge",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  User takes 1/3 the damage it inflicts in recoil.",
        accuracy: 100,
        power: 120
      },
      {
        id: 39,
        name: "tail-whip",
        type_id: 13,
        category_id: 3,
        effect: "Lowers the target's Defense by one stage.",
        accuracy: 100,
        power: null
      },
      {
        id: 40,
        name: "poison-sting",
        type_id: 14,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to poison the target.",
        accuracy: 100,
        power: 15
      },
      {
        id: 41,
        name: "twineedle",
        type_id: 1,
        category_id: 1,
        effect: "Inflicts regular damage. Hits twice in the same turn.  Has a $effect_chance% chance to poison the target.",
        accuracy: 100,
        power: 25
      },
      {
        id: 42,
        name: "pin-missile",
        type_id: 1,
        category_id: 1,
        effect: "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.",
        accuracy: 95,
        power: 25
      },
      {
        id: 43,
        name: "leer",
        type_id: 13,
        category_id: 3,
        effect: "Lowers the target's Defense by one stage.",
        accuracy: 100,
        power: null
      },
      {
        id: 44,
        name: "bite",
        type_id: 2,
        category_id: 1,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to make the target flinch.",
        accuracy: 100,
        power: 60
      },
      {
        id: 45,
        name: "growl",
        type_id: 13,
        category_id: 3,
        effect: "Lowers the target's Attack by one stage.",
        accuracy: 100,
        power: null
      },
      {
        id: 46,
        name: "roar",
        type_id: 13,
        category_id: 3,
        effect: "Switches the target out for another of its trainer's Pokémon selected at random.  Wild battles end immediately. Doesn't affect Pokémon with suction cups or under the effect of ingrain.",
        accuracy: null,
        power: null
      },
      {
        id: 47,
        name: "sing",
        type_id: 13,
        category_id: 3,
        effect: "Puts the target to sleep.",
        accuracy: 55,
        power: null
      },
      {
        id: 48,
        name: "supersonic",
        type_id: 13,
        category_id: 3,
        effect: "Confuses the target.",
        accuracy: 55,
        power: null
      },
      {
        id: 49,
        name: "sonic-boom",
        type_id: 13,
        category_id: 2,
        effect: "Inflicts exactly 20 damage.",
        accuracy: 90,
        power: null
      },
      {
        id: 50,
        name: "disable",
        type_id: 13,
        category_id: 3,
        effect: "Disables the target's last used move, preventing its use for 4–7 turns, selected at random, or until the target leaves the field.  If the target hasn't used a move since entering the field, if it tried to use a move this turn and failed,  if its last used move has 0 PP remaining, or if it already has a move disabled, this move will fail.",
        accuracy: 100,
        power: null
      },
      {
        id: 51,
        name: "acid",
        type_id: 14,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
        accuracy: 100,
        power: 40
      },
      {
        id: 52,
        name: "ember",
        type_id: 7,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to burn the target.",
        accuracy: 100,
        power: 40
      },
      {
        id: 53,
        name: "flamethrower",
        type_id: 7,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to burn the target.",
        accuracy: 100,
        power: 90
      },
      {
        id: 54,
        name: "mist",
        type_id: 12,
        category_id: 3,
        effect: "Pokémon on the user's side of the field are immune to stat-lowering effects for five turns. guard swap, heart swap, and power swap may still be used. defog used by an opponent will end this effect.",
        accuracy: null,
        power: null
      },
      {
        id: 55,
        name: "water-gun",
        type_id: 18,
        category_id: 2,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 40
      },
      {
        id: 56,
        name: "hydro-pump",
        type_id: 18,
        category_id: 2,
        effect: "Inflicts regular damage.",
        accuracy: 80,
        power: 110
      },
      {
        id: 57,
        name: "surf",
        type_id: 18,
        category_id: 2,
        effect: "Inflicts regular damage. If the target is in the first turn of dive, this move will hit with double power.",
        accuracy: 100,
        power: 90
      },
      {
        id: 58,
        name: "ice-beam",
        type_id: 12,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to freeze the target.",
        accuracy: 100,
        power: 90
      },
      {
        id: 59,
        name: "blizzard",
        type_id: 12,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to freeze the target. During hail, this move has 100% accuracy.  It also has a (100 - accuracy)% chance to break through the protection of protect and detect.",
        accuracy: 70,
        power: 110
      },
      {
        id: 60,
        name: "psybeam",
        type_id: 15,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to confuse the target.",
        accuracy: 100,
        power: 65
      },
      {
        id: 61,
        name: "bubble-beam",
        type_id: 18,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Speed by one stage.",
        accuracy: 100,
        power: 65
      },
      {
        id: 62,
        name: "aurora-beam",
        type_id: 12,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Attack by one stage.",
        accuracy: 100,
        power: 65
      },
      {
        id: 63,
        name: "hyper-beam",
        type_id: 13,
        category_id: 2,
        effect: "Inflicts regular damage.  User loses its next turn to \"recharge\", and cannot attack or switch out during that turn.",
        accuracy: 90,
        power: 150
      },
      {
        id: 64,
        name: "peck",
        type_id: 8,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 35
      },
      {
        id: 65,
        name: "drill-peck",
        type_id: 8,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 80
      },
      {
        id: 66,
        name: "submission",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts regular damage.  User takes 1/4 the damage it inflicts in recoil.",
        accuracy: 80,
        power: 80
      },
      {
        id: 67,
        name: "low-kick",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts regular damage.  Power increases with the target's weight in kilograms, to a maximum of 120. Target's weight | Power\n--------------- | ----:\nUp to 10kg      |    20\nUp to 25kg      |    40\nUp to 50kg      |    60\nUp to 100kg     |    80\nUp to 200kg     |   100\nAbove 200kg     |   120\n",
        accuracy: 100,
        power: null
      },
      {
        id: 68,
        name: "counter",
        type_id: 6,
        category_id: 1,
        effect: "Targets the last opposing Pokémon to hit the user with a physical move this turn.  Inflicts twice the damage that move did to the user.  If there is no eligible target, this move will fail.  Type immunity applies, but other type effects are ignored. This move cannot be copied by mirror move, nor selected by assist or metronome.",
        accuracy: 100,
        power: null
      },
      {
        id: 69,
        name: "seismic-toss",
        type_id: 6,
        category_id: 1,
        effect: "Inflicts damage equal to the user's level.  Type immunity applies, but other type effects are ignored.",
        accuracy: 100,
        power: null
      },
      {
        id: 70,
        name: "strength",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 80
      },
      {
        id: 71,
        name: "absorb",
        type_id: 10,
        category_id: 2,
        effect: "Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
        accuracy: 100,
        power: 20
      },
      {
        id: 72,
        name: "mega-drain",
        type_id: 10,
        category_id: 2,
        effect: "Inflicts regular damage.  Drains half the damage inflicted to heal the user.",
        accuracy: 100,
        power: 40
      },
      {
        id: 73,
        name: "leech-seed",
        type_id: 10,
        category_id: 3,
        effect: "Plants a seed on the target that drains 1/8 of its max HP at the end of every turn and heals the user for the amount taken.  Has no effect on grass Pokémon.  The seed remains until the target leaves the field. The user takes damage instead of being healed if the target has liquid ooze. rapid spin will remove this effect. This effect is passed on by baton pass.",
        accuracy: 90,
        power: null
      },
      {
        id: 74,
        name: "growth",
        type_id: 13,
        category_id: 3,
        effect: "Raises the user's Attack and Special Attack by one stage each.  During sunny day, raises both stats by two stages.",
        accuracy: null,
        power: null
      },
      {
        id: 75,
        name: "razor-leaf",
        type_id: 10,
        category_id: 1,
        effect: "Inflicts regular damage.  User's critical hit rate is one level higher when using this move.",
        accuracy: 95,
        power: 55
      },
      {
        id: 76,
        name: "solar-beam",
        type_id: 10,
        category_id: 2,
        effect: "Inflicts regular damage.  User charges for one turn before attacking. During sunny day, the charge turn is skipped. During hail, rain dance, or sandstorm, power is halved. This move cannot be selected by sleep talk.",
        accuracy: 100,
        power: 120
      },
      {
        id: 77,
        name: "poison-powder",
        type_id: 14,
        category_id: 3,
        effect: "Poisons the target.",
        accuracy: 75,
        power: null
      },
      {
        id: 78,
        name: "stun-spore",
        type_id: 10,
        category_id: 3,
        effect: "Paralyzes the target.",
        accuracy: 75,
        power: null
      },
      {
        id: 79,
        name: "sleep-powder",
        type_id: 10,
        category_id: 3,
        effect: "Puts the target to sleep.",
        accuracy: 75,
        power: null
      },
      {
        id: 80,
        name: "petal-dance",
        type_id: 10,
        category_id: 2,
        effect: "Inflicts regular damage.  User is forced to attack with this move for 2–3 turns,selected at random.  After the last hit, the user becomes confused. safeguard does not protect against the confusion from this move.",
        accuracy: 100,
        power: 120
      },
      {
        id: 81,
        name: "string-shot",
        type_id: 1,
        category_id: 3,
        effect: "Lowers the target's Speed by two stages.",
        accuracy: 95,
        power: null
      },
      {
        id: 82,
        name: "dragon-rage",
        type_id: 3,
        category_id: 2,
        effect: "Inflicts exactly 40 damage.",
        accuracy: 100,
        power: null
      },
      {
        id: 83,
        name: "fire-spin",
        type_id: 7,
        category_id: 2,
        effect: "Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use. rapid spin cancels this effect.",
        accuracy: 85,
        power: 35
      },
      {
        id: 84,
        name: "thunder-shock",
        type_id: 4,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to paralyze the target.",
        accuracy: 100,
        power: 40
      },
      {
        id: 85,
        name: "thunderbolt",
        type_id: 4,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to paralyze the target.",
        accuracy: 100,
        power: 90
      },
      {
        id: 86,
        name: "thunder-wave",
        type_id: 4,
        category_id: 3,
        effect: "Paralyzes the target.",
        accuracy: 90,
        power: null
      },
      {
        id: 87,
        name: "thunder",
        type_id: 4,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to paralyze the target. During rain dance, this move has 100% accuracy.  It also has a (100 - accuracy)% chance to break through the protection of protect and detect. During sunny day, this move has 50% accuracy.",
        accuracy: 70,
        power: 110
      },
      {
        id: 88,
        name: "rock-throw",
        type_id: 16,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 90,
        power: 50
      },
      {
        id: 89,
        name: "earthquake",
        type_id: 11,
        category_id: 1,
        effect: "Inflicts regular damage. If the target is in the first turn of dig, this move will hit with double power.",
        accuracy: 100,
        power: 100
      },
      {
        id: 90,
        name: "fissure",
        type_id: 11,
        category_id: 1,
        effect: "Inflicts damage equal to the target's max HP.  Ignores accuracy and evasion modifiers.  This move's accuracy is 30% plus 1% for each level the user is higher than the target.  If the user is a lower level than the target, this move will fail. Because this move inflicts a specific and finite amount of damage, endure still prevents the target from fainting. The effects of lock on, mind reader, and no guard still apply, as long as the user is equal or higher level than the target.  However, they will not give this move a chance to break through detect or protect.",
        accuracy: 30,
        power: null
      },
      {
        id: 91,
        name: "dig",
        type_id: 11,
        category_id: 1,
        effect: "Inflicts regular damage.  User digs underground for one turn, becoming immune to attack, and hits on the second turn. During the immune turn, earthquake, fissure, and magnitude still hit the user normally, and their power is doubled if appropriate. The user may be hit during its immune turn if under the effect of lock on, mind reader, or no guard. This move cannot be selected by sleep talk.",
        accuracy: 100,
        power: 80
      },
      {
        id: 92,
        name: "toxic",
        type_id: 14,
        category_id: 3,
        effect: "Badly poisons the target.  Never misses when used by a poison-type Pokémon.",
        accuracy: 90,
        power: null
      },
      {
        id: 93,
        name: "confusion",
        type_id: 15,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to confuse the target.",
        accuracy: 100,
        power: 50
      },
      {
        id: 94,
        name: 15,
        type_id: 15,
        category_id: 2,
        effect: "Inflicts regular damage.  Has a $effect_chance% chance to lower the target's Special Defense by one stage.",
        accuracy: 100,
        power: 90
      },
      {
        id: 95,
        name: "hypnosis",
        type_id: 15,
        category_id: 3,
        effect: "Puts the target to sleep.",
        accuracy: 60,
        power: null
      },
      {
        id: 96,
        name: "meditate",
        type_id: 15,
        category_id: 3,
        effect: "Raises the user's Attack by one stage.",
        accuracy: null,
        power: null
      },
      {
        id: 97,
        name: "agility",
        type_id: 15,
        category_id: 3,
        effect: "Raises the user's Speed by two stages.",
        accuracy: null,
        power: null
      },
      {
        id: 98,
        name: "quick-attack",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.",
        accuracy: 100,
        power: 40
      },
      {
        id: 99,
        name: "rage",
        type_id: 13,
        category_id: 1,
        effect: "Inflicts regular damage.  Every time the user is hit after it uses this move but before its next action, its Attack raises by one stage.",
        accuracy: 100,
        power: 20
      },
      {
        id: 100,
        name: "teleport",
        type_id: 15,
        category_id: 3,
        effect: "Does nothing.  Wild battles end immediately.",
        accuracy: null,
        power: null
      }
  ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('moves', null, {});
  }
};
