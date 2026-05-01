import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const games = [
  { id: '1', day: 'Friday, 1 May', home: 'Bulldogs', away: 'Cowboys', time: '6:00 pm', venue: 'Accor Stadium, Sydney' },
  { id: '2', day: 'Friday, 1 May', home: 'Dolphins', away: 'Storm', time: '8:00 pm', venue: 'Suncorp Stadium, Brisbane' },
  { id: '3', day: 'Saturday, 2 May', home: 'Titans', away: 'Raiders', time: '3:00 pm', venue: 'Cbus Super Stadium, Gold Coast' },
  { id: '4', day: 'Saturday, 2 May', home: 'Eels', away: 'Warriors', time: '5:30 pm', venue: 'CommBank Stadium, Sydney' },
  { id: '5', day: 'Saturday, 2 May', home: 'Roosters', away: 'Broncos', time: '7:30 pm', venue: 'Allianz Stadium, Sydney' },
  { id: '6', day: 'Sunday, 3 May', home: 'Knights', away: 'Rabbitohs', time: '2:00 pm', venue: 'McDonald Jones Stadium, Newcastle' },
  { id: '7', day: 'Sunday, 3 May', home: 'Sharks', away: 'Wests Tigers', time: '4:05 pm', venue: 'Ocean Protect Stadium, Sydney' },
  { id: '8', day: 'Sunday, 3 May', home: 'Panthers', away: 'Sea Eagles', time: '6:15 pm', venue: 'CommBank Stadium, Sydney' },
];

export default function TipScreen() {
  const [picks, setPicks] = useState({});

  const selectTeam = (gameId, team) => {
    setPicks(prev => ({ ...prev, [gameId]: team }));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 16, color: 'black' }}>
        Round 9 — Pick Your Winners
      </Text>

      {games.map((game) => (
        <View key={game.id} style={{ margin: 12, padding: 16, backgroundColor: '#f5f5f5', borderRadius: 12 }}>
          <Text style={{ color: '#888', fontSize: 13, marginBottom: 4 }}>{game.day} • {game.time}</Text>
          <Text style={{ color: '#888', fontSize: 13, marginBottom: 12 }}>📍 {game.venue}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => selectTeam(game.id, game.home)}
              style={{
                flex: 1,
                backgroundColor: picks[game.id] === game.home ? '#007AFF' : 'white',
                borderRadius: 8,
                padding: 12,
                alignItems: 'center',
                marginRight: 6,
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: picks[game.id] === game.home ? 'white' : 'black' }}>
                {game.home}
              </Text>
              <Text style={{ fontSize: 12, color: picks[game.id] === game.home ? 'white' : '#888' }}>Home</Text>
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', paddingHorizontal: 8 }}>
              <Text style={{ fontWeight: 'bold', color: '#888' }}>vs</Text>
            </View>

            <TouchableOpacity
              onPress={() => selectTeam(game.id, game.away)}
              style={{
                flex: 1,
                backgroundColor: picks[game.id] === game.away ? '#007AFF' : 'white',
                borderRadius: 8,
                padding: 12,
                alignItems: 'center',
                marginLeft: 6,
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: picks[game.id] === game.away ? 'white' : 'black' }}>
                {game.away}
              </Text>
              <Text style={{ fontSize: 12, color: picks[game.id] === game.away ? 'white' : '#888' }}>Away</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}