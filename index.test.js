const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});

// EX 1 S1
describe("POST /s1/exercice1", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice1")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la somme de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 3 }]);
  });
});

// EX2 S1
describe("POST /s1/exercice2", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la somme de n1 et n2", async () => {
    const res = await request(app).post("/s1/exercice2").send({ n1: 3, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 1 }]);
  });
});

// EX3 S1
describe("POST /s1/exercice3", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement la multiplication de n1 par n2", async () => {
    const res = await request(app)
      .post("/s1/exercice3")
      .send({ n1: 10, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 20 }]);
  });
});

// EX4 S1
describe("POST /s1/exercice3", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  /*test("Renvoie une erreur si n2 est égal à 0", async () => {
    const res = await request(app).post("/s1/exercice4").send({ n1: 1, n2: 0 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { reponse: "La division par 0 n'est pas possible" },
    ]);
  });*/

  test("Calcule correctement la division de n1 par n2", async () => {
    const res = await request(app)
      .post("/s1/exercice4")
      .send({ n1: 10, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 5 }]);
  });
});

//EX5 S1
describe("POST /s1/exercice5", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  test("Renvoie 1 pour n = 0 ou n = 1", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 0 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 1 }]);

    const res2 = await request(app).post("/s1/exercice5").send({ n1: 1 });
    expect(res2.statusCode).toBe(200);
    expect(res2.body).toEqual([{ reponse: 1 }]);
  });

  test("Renvoie le résultat attendu pour n > 1", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 2 }]);
  });

  test("Renvoie une erreur si n est négatif", async () => {
    const res = await request(app).post("/s1/exercice5").send({ n1: -1 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { reponse: "Veuillez entrer un nombre positif" },
    ]);
  });
});

//EX6 S1
describe("POST /s1/exercice6", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoi impair pour n1", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 13 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "impair" }]);
  });

  test("Renvoi pair pour n1", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "pair" }]);
  });
});

//EX7 S1
describe("POST /s1/exercice7", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoi la conversion de Celsius en Fahrenheit", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: 15 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 59 }]);
  });
});

//EX8 S1
describe("POST /s1/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoi l'air d'un cercle", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: 8 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 201.06192982974676 }]);
  });
});

//EX9 S1
describe("POST /s1/exercice9", () => {
  test("Renvoi true si c'est un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "rotor" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });
});

//EX10 S1
describe("POST /s1/exercice10", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s1/exercice8").send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  test("Renvoi le PGCD de n1 et n2", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 52, n2: 48 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 4 }]);
  });
});

//SAISON 2

//EX1 S2
describe("POST /s2/exercice1", () => {
  test("Renvoi la date d'aujourd'hui il y a 10 ans", async () => {
    const dateNow = new Date();
    const year = dateNow.getFullYear() - 10;
    const month = ("0" + (dateNow.getMonth() + 1)).slice(-2);
    const day = ("0" + dateNow.getDate()).slice(-2);
    const dateAttempt = `${year}-${month}-${day}`;
    const response = await request(app).post("/s2/exercice1").expect(200);
    expect(response.body[0].reponse).toBe(dateAttempt);
  });
});

//EX2 S2
describe("POST /s2/exercice2", () => {
  test("Renvoie la date formatée en jj/mm/yyyy", async () => {
    // Vous devez envoyer une date valide dans le corps de la requête.
    const dateAEnvoyer = new Date(2023, 10, 2); // pour 2 Novembre 2023
    const dateFormateeAttendue = "02/11/2023";

    const response = await request(app)
      .post("/s2/exercice2")
      .send({ date: dateAEnvoyer.toISOString() }) // Supposant que le corps de la requête attend une date ISO.
      .expect(200);

    expect(response.body[0].reponse).toBe(dateFormateeAttendue);
  });
});

//EX3 S2
describe("POST /s2/exercice3", () => {
  test("Renvoie la différence de jours entre deux dates", async () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-10");

    const expectedDifference = (date2 - date1) / (1000 * 60 * 60 * 24);

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: date1.toISOString(), date2: date2.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(expectedDifference);
  });

  test("Renvoie une erreur si une date n'est pas valide", async () => {
    const invalidDate1 = "not-a-date";
    const date2 = new Date("2023-01-10");

    const response = await request(app)
      .post("/s2/exercice3")
      .send({ date1: invalidDate1, date2: date2.toISOString() });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });
});

//EX4 S2
describe("POST /s2/exercice4", () => {
  test("Renvoie la date avec le nombre de jours ajoutés", async () => {
    const date = new Date("2023-11-06");
    const days = 10;

    const expectedDate = new Date("2023-11-16");

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: date.toISOString(), days });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(expectedDate.toISOString());
  });
  test("Renvoie une erreur si le nombre de jours est négatif", async () => {
    const date = new Date("2023-11-06");
    const days = -10;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: date.toISOString(), days });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer un nombre de jours positif."
    );
  });
  test("Renvoie une erreur si le nombre de jours est égal à 0", async () => {
    const date = new Date("2023-11-06");
    const days = 0;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: date.toISOString(), days });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer un nombre de jours valide."
    );
  });
  test("Renvoie une erreur si le nombre de jours est null", async () => {
    const date = new Date("2023-11-06");
    const days = null;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: date.toISOString(), days });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer un nombre de jours valide."
    );
  });
  test("Renvoie une erreur si le nombre de jours est undefined", async () => {
    const date = new Date("2023-11-06");
    const days = undefined;

    const response = await request(app)
      .post("/s2/exercice4")
      .send({ date: date.toISOString(), days });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe(
      "Veuillez entrer un nombre de jours valide."
    );
  });
});

//EX5 S2
describe("POST /s2/exercice5", () => {
  test("Renvoie true si l'année est bissextile", async () => {
    const year = 2020;

    const response = await request(app)
      .post("/s2/exercice5")
      .send({ annee: year });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(true);
  });
  test("Renvoie false si l'année n'est pas bissextile", async () => {
    const year = 2021;

    const response = await request(app)
      .post("/s2/exercice5")
      .send({ annee: year });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(false);
  });
  test("Renvoie une erreur si l'année est négative", async () => {
    const year = -2021;

    const response = await request(app)
      .post("/s2/exercice5")
      .send({ annee: year });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une année valide.");
  });
  test("Renvoie une erreur si l'année est null", async () => {
    const year = null;

    const response = await request(app)
      .post("/s2/exercice5")
      .send({ annee: year });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une année valide.");
  });
  test("Renvoie une erreur si l'année est undefined", async () => {
    const year = undefined;

    const response = await request(app)
      .post("/s2/exercice5")
      .send({ annee: year });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une année valide.");
  });
});

//EX6 S2
describe("POST /s2/exercice6", () => {
  test("Renvoie le premier jour du mois", async () => {
    const date = new Date("2023-11-06");

    const expectedDate = new Date("2023-11-01");

    const response = await request(app)
      .post("/s2/exercice6")
      .send({ date: date.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(expectedDate.toISOString());
  });
  test("Renvoie une erreur si la date n'est pas valide", async () => {
    const date = "not-a-date";

    const response = await request(app).post("/s2/exercice6").send({ date });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });
});

//EX7 S2
describe("POST /s2/exercice7", () => {
  test("Renvoie le dernier jour du mois", async () => {
    const date = new Date("2023-11-06");

    const expectedDate = new Date("2023-11-30");

    const response = await request(app)
      .post("/s2/exercice7")
      .send({ date: date.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(expectedDate.toISOString());
  });
  test("Renvoie une erreur si la date n'est pas valide", async () => {
    const date = "not-a-date";

    const response = await request(app).post("/s2/exercice7").send({ date });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });
});

//EX8 S2
describe("POST /s2/exercice8", () => {
  test("Renvoie la durée formatée", async () => {
    const heures = 2;
    const minutes = 10;

    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe("02:10");
  });
  test("Renvoie une erreur si les heures sont négatives", async () => {
    const heures = -2;
    const minutes = 10;

    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une durée valide.");
  });
  test("Renvoie une erreur si les minutes sont négatives", async () => {
    const heures = 2;
    const minutes = -10;

    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une durée valide.");
  });
  test("Renvoie une erreur si les heures sont null", async () => {
    const heures = null;
    const minutes = 10;

    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une durée valide.");
  });
  test("Renvoie une erreur si les minutes sont null", async () => {
    const heures = 2;
    const minutes = null;

    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une durée valide.");
  });
  test("Renvoie une erreur si les heures sont undefined", async () => {
    const heures = undefined;
    const minutes = 10;

    const response = await request(app)
      .post("/s2/exercice8")
      .send({ heures, minutes });

    expect(response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une durée valide.");
  });
});

//EX9 S2
describe("POST /s2/exercice9", () => {
  test("Renvoie true si les deux plages de dates se chevauchent", async () => {
    const debut1 = new Date("2023-11-06");
    const fin1 = new Date("2023-11-10");
    const debut2 = new Date("2023-11-08");
    const fin2 = new Date("2023-11-12");

    const response = await request(app)
      .post("/s2/exercice9")
      .send({ debut1: debut1.toISOString(), fin1: fin1.toISOString(), debut2: debut2.toISOString(), fin2: fin2.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(true);
  });
  test("Renvoie false si les deux plages de dates ne se chevauchent pas", async () => {
    const debut1 = new Date("2023-11-06");
    const fin1 = new Date("2023-11-10");
    const debut2 = new Date("2023-11-11");
    const fin2 = new Date("2023-11-12");

    const response = await request(app)
      .post("/s2/exercice9")
      .send({ debut1: debut1.toISOString(), fin1: fin1.toISOString(), debut2: debut2.toISOString(), fin2: fin2.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(false);
  });
  test("Renvoie une erreur si une date n'est pas valide", async () => {
    const debut1 = new Date("2023-11-06");
    const fin1 = new Date("2023-11-10");
    const debut2 = "not-a-date";
    const fin2 = new Date("2023-11-12");

    const response = await request(app)
      .post("/s2/exercice9")
      .send({ debut1: debut1.toISOString(), fin1: fin1.toISOString(), debut2, fin2: fin2.toISOString() });

    expect (response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer des dates valides.");
  });
});

//EX10 S2
describe("POST /s2/exercice10", () => {
  test("Renvoie l'âge à partir de la date de naissance", async () => {
    const dateNaissance = new Date("1998-11-06");

    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance: dateNaissance.toISOString() });

    expect(response.statusCode).toBe(200);
    expect(response.body[0].reponse).toBe(22);
  });
  test("Renvoie une erreur si la date de naissance n'est pas valide", async () => {
    const dateNaissance = "not-a-date";

    const response = await request(app)
      .post("/s2/exercice10")
      .send({ dateNaissance });

    expect (response.statusCode).toBe(400);
    expect(response.body.reponse).toBe("Veuillez entrer une date valide.");
  });
});