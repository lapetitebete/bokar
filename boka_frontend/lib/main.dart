import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String server = '192.168.1.105'; // public localhost
  // String server = '127.0.0.1'; // android localhost
  // String server = '10.0.2.2'; // ios localhost
  int _counter = 0;
  String glossaryFR = '';
  String glossaryWO = '';
  String audioFR = '';
  String audioWO = '';
  String image = '';
  bool isPlaying = false;
  final audioPlayer = AudioPlayer();
  Duration duration = Duration.zero;
  Duration position = Duration.zero;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  void initState() {
    super.initState();

    /// Listen to states: playing, paused, stopped
    audioPlayer.onPlayerStateChanged.listen((state) {
      setState(() {
        isPlaying = state == PlayerState.PLAYING;
      });
    });
  }

  void fetchCard() async {
    String apiUrl = "http://$server:8000/card/$_counter";
    var responseCard = await http.get(Uri.parse(apiUrl));
    final parsedBodyCard = json.decode(utf8.decode(responseCard.bodyBytes));

    print(parsedBodyCard);
    print("");

    var responseImage;
    if (parsedBodyCard['image'].length > 0) {
      apiUrl = "http://$server:8000/image/${parsedBodyCard['image']}";
      responseImage = await http.get(Uri.parse(apiUrl));
    }

    setState(() {
      _counter++;
      glossaryFR = parsedBodyCard["glossaryFR"];
      glossaryWO = parsedBodyCard["glossaryWO"];
      audioFR = parsedBodyCard["audioFR"];
      audioWO = parsedBodyCard["audioWO"];
      if (responseImage != null) {
        image = base64Encode(responseImage.bodyBytes);
      } else {
        image = '';
      }
    });
  }

  void audioButtonPressed() async {
    if (isPlaying) {
      // await audioPlayer.pause();
    } else {
      if (audioWO.isNotEmpty) {
        String apiUrl = "http://$server:8000/audioWO/$audioWO";
        var response = await http.get(Uri.parse(apiUrl));
        await audioPlayer.playBytes(response.bodyBytes);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // const Text(
            //   'You have pushed the button this many times:',
            // ),
            // Text(
            //   '$_counter',
            //   style: Theme.of(context).textTheme.headline4,
            // ),
            // Text(audioFR),
            Container(
              margin: EdgeInsets.all(5),
              padding: EdgeInsets.symmetric(vertical: 5, horizontal: 0),
              width: 300,
              height: 150,
              color: Colors.blue[600],
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  image.length > 0
                      ? Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(100),
                            child: Image.memory(
                              base64Decode(image),
                              // width: 100,
                              // height: 100,
                              // fit: BoxFit.fill,
                            ),
                          ),
                        )
                      : Text(""),
                  CircleAvatar(
                    radius: 15,
                    child: IconButton(
                      icon: Icon(
                        isPlaying ? Icons.pause : Icons.play_arrow,
                      ),
                      iconSize: 15,
                      onPressed: audioButtonPressed,
                    ),
                  ),
                  Text(glossaryWO),
                ],
              ),
            ),
            Text(glossaryFR),
            // Text(audioWO),
            // Text(image),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: fetchCard,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
