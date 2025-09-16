import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const teamsData = [
  {
    id: 'corinthians',
    name: 'Corinthians',
    logo: 'https://via.placeholder.com/80x80/1e40af/ffffff?text=COR',
    info: 'São Paulo - SP',
    founded: '1997',
    stadium: 'Neo Química Arena',
  },
  {
    id: 'palmeiras',
    name: 'Palmeiras',
    logo: 'https://via.placeholder.com/80x80/10b981/ffffff?text=PAL',
    info: 'São Paulo - SP',
    founded: '1997',
    stadium: 'Allianz Parque',
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo',
    logo: 'https://via.placeholder.com/80x80/ef4444/ffffff?text=SP',
    info: 'São Paulo - SP',
    founded: '1997',
    stadium: 'Morumbi',
  },
  {
    id: 'santos',
    name: 'Santos',
    logo: 'https://via.placeholder.com/80x80/1e40af/ffffff?text=SAN',
    info: 'Santos - SP',
    founded: '1997',
    stadium: 'Vila Belmiro',
  },
  {
    id: 'flamengo',
    name: 'Flamengo',
    logo: 'https://via.placeholder.com/80x80/ef4444/ffffff?text=FLA',
    info: 'Rio de Janeiro - RJ',
    founded: '1995',
    stadium: 'Maracanã',
  },
  {
    id: 'fluminense',
    name: 'Fluminense',
    logo: 'https://via.placeholder.com/80x80/10b981/ffffff?text=FLU',
    info: 'Rio de Janeiro - RJ',
    founded: '1995',
    stadium: 'Maracanã',
  },
  {
    id: 'vasco',
    name: 'Vasco da Gama',
    logo: 'https://via.placeholder.com/80x80/1e40af/ffffff?text=VAS',
    info: 'Rio de Janeiro - RJ',
    founded: '1995',
    stadium: 'São Januário',
  },
  {
    id: 'botafogo',
    name: 'Botafogo',
    logo: 'https://via.placeholder.com/80x80/000000/ffffff?text=BOT',
    info: 'Rio de Janeiro - RJ',
    founded: '1995',
    stadium: 'Nilton Santos',
  },
  {
    id: 'atletico-mg',
    name: 'Atlético Mineiro',
    logo: 'https://via.placeholder.com/80x80/1e40af/ffffff?text=ATM',
    info: 'Belo Horizonte - MG',
    founded: '1995',
    stadium: 'Mineirão',
  },
  {
    id: 'cruzeiro',
    name: 'Cruzeiro',
    logo: 'https://via.placeholder.com/80x80/10b981/ffffff?text=CRU',
    info: 'Belo Horizonte - MG',
    founded: '1995',
    stadium: 'Mineirão',
  },
  {
    id: 'gremio',
    name: 'Grêmio',
    logo: 'https://via.placeholder.com/80x80/1e40af/ffffff?text=GRE',
    info: 'Porto Alegre - RS',
    founded: '1995',
    stadium: 'Arena do Grêmio',
  },
  {
    id: 'internacional',
    name: 'Internacional',
    logo: 'https://via.placeholder.com/80x80/ef4444/ffffff?text=INT',
    info: 'Porto Alegre - RS',
    founded: '1995',
    stadium: 'Beira-Rio',
  },
];

export default function TeamsScreen() {
  const [teams, setTeams] = useState(teamsData);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.info.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-gradient-to-r from-cbf-blue via-cbf-purple to-cbf-green px-6 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          Times
        </Text>
        <Text className="text-white text-base opacity-90 mb-4">
          Conheça os times do futebol feminino brasileiro
        </Text>
        
        {/* Search Bar */}
        <View className="bg-white/20 rounded-xl px-4 py-3 flex-row items-center">
          <Ionicons name="search" size={20} color="white" />
          <TextInput
            className="flex-1 text-white ml-3 text-base"
            placeholder="Buscar times..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Teams Grid */}
      <ScrollView className="flex-1 px-4 py-4">
        <View className="flex-row flex-wrap justify-between">
          {filteredTeams.map((team) => (
            <TouchableOpacity
              key={team.id}
              className="bg-white rounded-2xl shadow-lg mb-4 p-4 w-[48%]"
            >
              <View className="items-center">
                <Image
                  source={{ uri: team.logo }}
                  className="w-16 h-16 mb-3"
                  resizeMode="contain"
                />
                <Text className="text-gray-800 font-bold text-lg text-center mb-1">
                  {team.name}
                </Text>
                <Text className="text-gray-600 text-sm text-center mb-2">
                  {team.info}
                </Text>
                <View className="bg-cbf-blue/10 px-3 py-1 rounded-full">
                  <Text className="text-cbf-blue text-xs font-semibold">
                    Fundado em {team.founded}
                  </Text>
                </View>
                <Text className="text-gray-500 text-xs text-center mt-2">
                  {team.stadium}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        {filteredTeams.length === 0 && (
          <View className="items-center py-12">
            <Ionicons name="search" size={48} color="#9CA3AF" />
            <Text className="text-gray-500 text-lg font-semibold mt-4">
              Nenhum time encontrado
            </Text>
            <Text className="text-gray-400 text-center mt-2">
              Tente buscar por outro termo
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
