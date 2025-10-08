'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Wrench, Zap, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import VLibras from 'vlibras-nextjs';

export default function CarrinhoBluetooth() {
  return (
    <div className="min-h-screen">
      <VLibras forceOnload />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Projetos
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Robótica</Badge>
            </div>
            <h1 className="text-4xl font-bold text-balance">
              Carrinho Robô Bluetooth: Guia Completo
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bem-vindo ao seu primeiro projeto de robótica! Neste guia, vamos
              construir do zero um carrinho robô totalmente funcional,
              controlado diretamente do seu smartphone via Bluetooth.
            </p>
          </div>

          {/* Imagem Principal */}
          <div className="aspect-video overflow-hidden rounded-lg">
            {/* <img
              src=""
              alt="Carrinho Robô Bluetooth"
              className="h-full w-full object-cover"
            /> */}
            <div className="h-full w-full object-cover bg-gray-500">
              {/* Placeholder para a imagem */}
            </div>
          </div>

          {/* Capítulo 0 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                0
              </div>
              <h2 className="text-3xl font-bold">
                Preparando o Ambiente de Programação
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Antes de mais nada, precisamos preparar nosso computador para que
              ele possa se comunicar com o &quot;cérebro&quot; do nosso robô. O
              programa que usaremos, o Arduino IDE, não vem com suporte nativo
              para o ESP32, então vamos configurá-lo.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  0.1. Baixar e Instalar o Arduino IDE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Acesse o site oficial do Arduino: www.arduino.cc</li>
                  <li>
                    Vá para a seção &quot;Software&quot; e baixe a versão mais
                    recente do &quot;Arduino IDE&quot; para seu sistema
                    operacional (Windows, macOS, etc.)
                  </li>
                  <li>Instale o programa seguindo os passos padrão</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  0.2. Adicionar o Suporte para Placas ESP32
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Abra o Arduino IDE</li>
                  <li>Vá em Arquivo &gt; Preferências</li>
                  <li>
                    No campo &quot;URLs Adicionais para Gerenciadores de
                    Placas&quot;, cole o seguinte link:
                    <code className="block mt-2 p-2 bg-muted rounded text-sm overflow-x-scroll">
                      https://dl.espressif.com/dl/package_esp32_index.json
                    </code>
                  </li>
                  <li>Clique em &quot;OK&quot;</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  0.3. Instalar as Placas ESP32
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>
                    Vá em Ferramentas &gt; Placa &gt; Gerenciador de Placas...
                  </li>
                  <li>Na barra de pesquisa, digite esp32</li>
                  <li>
                    Na opção &quot;esp32 by Espressif Systems&quot;, clique em
                    &quot;Instalar&quot;. Aguarde o processo terminar
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  0.4. Selecionar a Placa e a Porta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Conecte o ESP32 ao computador</li>
                  <li>
                    No Arduino IDE, vá em Ferramentas &gt; Placa &gt; esp32 e
                    selecione &quot;ESP32 Dev Module&quot;
                  </li>
                  <li>
                    Vá em Ferramentas &gt; Porta e selecione a porta COM que
                    apareceu
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Capítulo 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <h2 className="text-3xl font-bold">
                Lista de Componentes Essenciais
              </h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Microcontrolador ESP32 DEVKIT V1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Módulo Driver de Motor Ponte H L298N</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>KIT Chassi de Carro Robô 2WD</span>
                  </li>
                  <li className="ml-7 space-y-1 text-muted-foreground">
                    <div>• 1x Plataforma de acrílico</div>
                    <div>• 2x Motores DC com caixa de redução</div>
                    <div>• 2x Rodas</div>
                    <div>• 1x Roda boba</div>
                    <div>• Parafusos e suportes</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Suporte para 2 Baterias 18650 em Série</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      2x Baterias Recarregáveis 18650 | 6800mAh | 3.7V
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Chave Liga/Desliga Simples</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Capítulo 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <h2 className="text-3xl font-bold">
                Montagem Mecânica do Chassi
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Vamos montar o esqueleto do nosso robô.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Passo 1: Fixe os Motores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Usando os suportes e parafusos do seu kit, prenda os dois
                    motores DC na parte de baixo do chassi.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Passo 2: Encaixe as Rodas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pressione as rodas nos eixos dos motores.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Passo 3: Instale a Roda Boba
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fixe a roda boba na extremidade oposta aos motores. Ela
                    servirá de apoio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Passo 4: Posicione os Componentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Organize e fixe a placa ESP32, o módulo L298N, o suporte de
                    pilhas e a chave liga/desliga na parte de cima do chassi, de
                    forma equilibrada.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Capítulo 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <h2 className="text-3xl font-bold">Conexões Elétricas</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Esta é a etapa mais crítica, onde damos &quot;vida&quot; ao
              sistema nervoso do nosso robô. O código que usaremos define pinos
              específicos, então as conexões devem seguir exatamente o que está
              descrito abaixo.
            </p>

            <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
              <CardHeader className="flex">
                <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
                  <Zap className="h-5 w-5" />
                  Atenção: Siga as conexões exatamente como descrito!
                </CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3.1. Circuito de Alimentação (Energia)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    1. Conexão Positiva (+):
                  </h4>
                  <p className="text-muted-foreground">
                    Pegue o fio vermelho (+) do suporte de baterias e conecte-o
                    em um dos terminais da sua chave liga/desliga. No outro
                    terminal da chave, conecte dois fios vermelhos:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                    <li>
                      Um fio irá para o terminal de parafuso +12V da Ponte H
                      L298N (para alimentar os motores)
                    </li>
                    <li>
                      O outro fio irá para o pino VIN do ESP32 (para alimentar o
                      microcontrolador)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    2. Conexão Negativa (-):
                  </h4>
                  <p className="text-muted-foreground">
                    Pegue o fio preto (-) do suporte de baterias e divida-o em
                    dois fios pretos:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                    <li>
                      Um fio irá para o terminal de parafuso GND da Ponte H
                      L298N
                    </li>
                    <li>
                      O outro fio irá para qualquer um dos pinos GND do ESP32
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3.2. Conectando os Motores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conecte os dois fios do motor esquerdo nos terminais OUT1 e
                  OUT2 da Ponte H. Faça o mesmo com o motor direito nos
                  terminais OUT3 e OUT4.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  3.3. Sinais de Controle (ESP32 para Ponte H)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Conecte o pino GPIO 12 do ESP32 ao pino IN1 da Ponte H
                  </li>
                  <li>
                    • Conecte o pino GPIO 14 do ESP32 ao pino IN2 da Ponte H
                  </li>
                  <li>
                    • Conecte o pino GPIO 27 do ESP32 ao pino IN3 da Ponte H
                  </li>
                  <li>
                    • Conecte o pino GPIO 26 do ESP32 ao pino IN4 da Ponte H
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3.4. Pinos de Habilitação (Enable)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Remova os jumpers que vêm nesses pinos na Ponte H e faça as
                  seguintes conexões:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Conecte o pino GPIO 13 do ESP32 ao pino ENA da Ponte H
                  </li>
                  <li>
                    • Conecte o pino GPIO 25 do ESP32 ao pino ENB da Ponte H
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Capítulo 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                4
              </div>
              <h2 className="text-3xl font-bold">O Cérebro do Robô</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Com o robô montado e conectado corretamente, vamos carregar o seu
              código personalizado no ESP32. Ele já inclui mensagens de status
              que podemos ver no computador para ajudar a diagnosticar qualquer
              problema.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Passos para Upload do Código</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>
                    Conecte o ESP32 ao seu computador com o cabo Micro-USB
                  </li>
                  <li>
                    Abra a Arduino IDE e certifique-se de que a placa
                    (&quot;ESP32 Dev Module&quot;) e a Porta COM correta estão
                    selecionadas no menu &quot;Ferramentas&quot;
                  </li>
                  <li>Copie e cole o código abaixo no editor</li>
                  <li>Clique em Rascunho &gt; Enviar usando programador</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Código do Carrinho</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`#include "BluetoothSerial.h"

int ENA = 13;
int IN1 = 12;
int IN2 = 14;
int IN3 = 27;
int IN4 = 26;
int ENB = 25;

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth não esta habilitado! Por favor entre nas configurações e habilite o Bluetooth.
#endif

BluetoothSerial SerialBT;
unsigned long ultimoLog = 0;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  
  digitalWrite(ENA, HIGH);
  digitalWrite(ENB, HIGH);
  
  Serial.begin(9600);
  SerialBT.begin("Robo_Carrinho_ESP32");
  
  Serial.println("✅ Carrinho iniciado!");
  Serial.println("📡 Aguardando conexão Bluetooth...");
}

void loop() {
  static bool conectado = false;
  
  if (SerialBT.hasClient() && !conectado) {
    Serial.println("🔗 Dispositivo Bluetooth conectado!");
    conectado = true;
  } else if (!SerialBT.hasClient() && conectado) {
    Serial.println("❌ Dispositivo Bluetooth desconectado!");
    conectado = false;
  }
  
  char Z;
  if (SerialBT.available() > 0) {
    Z = SerialBT.read();
    Serial.print("📨 Comando recebido: ");
    Serial.println(Z);
    delay(20);
    
    // FRENTE
    if (Z == 'F') {
      digitalWrite(IN1, LOW);
      digitalWrite(IN2, HIGH);
      digitalWrite(IN3, LOW);
      digitalWrite(IN4, HIGH);
    }
    // TRÁS
    else if (Z == 'B') {
      digitalWrite(IN1, HIGH);
      digitalWrite(IN2, LOW);
      digitalWrite(IN3, HIGH);
      digitalWrite(IN4, LOW);
    }
    // ESQUERDA
    else if (Z == 'L') {
      digitalWrite(IN1, LOW);
      digitalWrite(IN2, HIGH);
      digitalWrite(IN3, HIGH);
      digitalWrite(IN4, LOW);
    }
    // DIREITA
    else if (Z == 'R') {
      digitalWrite(IN1, HIGH);
      digitalWrite(IN2, LOW);
      digitalWrite(IN3, LOW);
      digitalWrite(IN4, HIGH);
    }
    // PARADO
    else if (Z == 'S') {
      digitalWrite(IN1, LOW);
      digitalWrite(IN2, LOW);
      digitalWrite(IN3, LOW);
      digitalWrite(IN4, LOW);
    }
  } else {
    if (millis() - ultimoLog > 3000) {
      Serial.println("⏳ Aguardando comandos...");
      ultimoLog = millis();
    }
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Capítulo 5 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                5
              </div>
              <h2 className="text-3xl font-bold">O Controle Remoto</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Para controlar nosso carrinho, vamos usar um aplicativo gratuito e
              muito popular na Play Store que oferece uma interface de controle
              remoto pronta para uso.
            </p>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  5.1. Baixando e Instalando o App
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>No seu celular Android, abra a Google Play Store</li>
                  <li>Pesquise por &quot;Arduino Bluetooth Controller&quot;</li>
                  <li>
                    Instale o aplicativo desenvolvido pela &quot;Giri
                    Studio&quot;
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5.2. Conectando e Controlando o Carrinho</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Ligue o Robô:</h4>
                  <p className="text-muted-foreground">
                    Coloque as baterias 18650 e use a chave para ligar o
                    carrinho.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    2. Parear o Bluetooth (Primeira Vez):
                  </h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                    <li>No seu celular, vá em Configurações &gt; Bluetooth</li>
                    <li>Ative o Bluetooth e procure por novos dispositivos</li>
                    <li>
                      Você deverá ver o &quot;Robo_Carrinho_ESP32&quot; na
                      lista. Clique para parear
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    3. Conecte-se Pelo Aplicativo:
                  </h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                    <li>Abra o aplicativo Arduino Bluetooth Control</li>
                    <li>
                      Clique no ícone de conexão no canto superior direito
                    </li>
                    <li>
                      Uma lista com seus dispositivos pareados irá aparecer.
                      Selecione o &quot;Robo_Carrinho_ESP32&quot;
                    </li>
                    <li>
                      O aplicativo irá tentar se conectar. Quando a conexão for
                      bem-sucedida, o ícone ficará verde
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Pilote seu Robô!</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                    <li>
                      Na tela inicial, selecione o modo &quot;Car
                      Controller&quot;
                    </li>
                    <li>A interface com os botões irá aparecer</li>
                    <li>Pressione ▲ e seu carrinho deve andar para frente</li>
                    <li>Pressione ▼ e ele deve ir para trás</li>
                    <li>Teste as curvas com ◀ e ▶</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Conclusão */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Conclusão</h2>
            <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
              <CardContent>
                <p className="text-green-900 dark:text-green-100 leading-relaxed">
                  Parabéns! Você construiu do zero um robô totalmente funcional.
                  Você aprendeu sobre montagem, eletrônica, programação e
                  comunicação sem fio. Este é apenas o começo da sua jornada no
                  mundo maker. Experimente modificar o código, adicionar
                  sensores ou luzes. As possibilidades são infinitas!
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Navegação */}
          <div className="pt-8">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
