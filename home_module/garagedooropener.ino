#include <Servo.h> 

Servo myservo;
int freedom = 6;
int button = 11; 
int led = 13;

char toggleDoor = 0;              // flag to toggle garage door.
char doorState = 0;               // flag to know state of door. 

void setup() 
{ 
  pinMode(button, INPUT_PULLUP);
  pinMode(freedom, INPUT_PULLUP);
  myservo.attach(9);
  pinMode(led, OUTPUT);  
  myservo.writeMicroseconds(1100);  // close 1100 us
} 

void loop() 
{
   
   if(!digitalRead(button))
   {
     toggleDoor = 1; 
   }
   
   if(toggleDoor)
   {
     if(!doorState)
     {
       myservo.writeMicroseconds(2200);  // open 2200 us
       doorState = 1;
       digitalWrite(led, LOW);
     }
     else
     {
       myservo.writeMicroseconds(1100);  // close 1100 us
       doorState = 0;
       digitalWrite(led, HIGH);
     }
     toggleDoor = 0;
     delay(1000);
   }
   
   if(!digitalRead(freedom))
   {
     myservo.writeMicroseconds(2200);
     doorState = 1;
     digitalWrite(led, LOW);
   }

} 
