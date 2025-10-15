int ValorUmidadeSolo = 0;
float porcentagemUmidade = 0;

void setup() {
Serial.begin(9600);
}

void loop() {
ValorUmidadeSolo = analogRead(A5);


porcentagemUmidade = 100.0 - ((ValorUmidadeSolo * 100.0) / 1023.0);


if (porcentagemUmidade < 0) porcentagemUmidade = 0;
if (porcentagemUmidade > 100) porcentagemUmidade = 100;


Serial.print(porcentagemUmidade);
// Serial.println(";");

delay(1000);
}