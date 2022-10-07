CREATE TABLE IF NOT EXISTS pokeworld.element (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  element VARCHAR(50) NOT NULL
);

DROP IF EXISTS pokeworld.pokemon;
CREATE TABLE IF NOT EXISTS pokeworld.pokemon (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  `order` INT NOT NULL,
  weigth INT NOT NULL,
  heigth INT NOT NULL
);

CREATE TABLE IF NOT EXISTS pokeworld.pokemon_type (
  pokemon_id INT NOT NULL,
  element_id INT NOT NULL,
  PRIMARY KEY(pokemon_id, element_id)
);
