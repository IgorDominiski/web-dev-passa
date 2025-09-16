import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Tournament {
  id: string;
  name: string;
  teams: string[];
  status: 'active' | 'completed' | 'upcoming';
  startDate: string;
  endDate: string;
}

export default function TournamentsScreen() {
  const [tournaments, setTournaments] = useState<Tournament[]>([
    {
      id: '1',
      name: 'Brasileirão Feminino 2025',
      teams: ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'Flamengo', 'Fluminense'],
      status: 'active',
      startDate: '2025-03-01',
      endDate: '2025-12-15',
    },
    {
      id: '2',
      name: 'Copa América Feminina 2025',
      teams: ['Brasil', 'Argentina', 'Colômbia', 'Chile', 'Peru', 'Venezuela'],
      status: 'upcoming',
      startDate: '2025-09-15',
      endDate: '2025-09-30',
    },
    {
      id: '3',
      name: 'Copa do Brasil Feminina 2024',
      teams: ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos'],
      status: 'completed',
      startDate: '2024-03-01',
      endDate: '2024-11-30',
    },
  ]);

  const [newTournamentName, setNewTournamentName] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 border-green-300 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 border-blue-300 text-blue-700';
      case 'completed':
        return 'bg-gray-100 border-gray-300 text-gray-700';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Em Andamento';
      case 'upcoming':
        return 'Em Breve';
      case 'completed':
        return 'Finalizado';
      default:
        return status;
    }
  };

  const createTournament = () => {
    if (!newTournamentName.trim()) {
      Alert.alert('Erro', 'Por favor, digite o nome do torneio');
      return;
    }

    const newTournament: Tournament = {
      id: Date.now().toString(),
      name: newTournamentName,
      teams: [],
      status: 'upcoming',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    };

    setTournaments([...tournaments, newTournament]);
    setNewTournamentName('');
    setShowCreateForm(false);
    Alert.alert('Sucesso', 'Torneio criado com sucesso!');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-gradient-to-r from-cbf-blue via-cbf-purple to-cbf-green px-6 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          Torneios
        </Text>
        <Text className="text-white text-base opacity-90 mb-4">
          Gerencie e acompanhe competições
        </Text>
        
        <TouchableOpacity
          onPress={() => setShowCreateForm(!showCreateForm)}
          className="bg-white/20 rounded-xl px-4 py-3 flex-row items-center justify-center"
        >
          <Ionicons name="add" size={20} color="white" />
          <Text className="text-white font-semibold ml-2">
            Criar Novo Torneio
          </Text>
        </TouchableOpacity>
      </View>

      {/* Create Tournament Form */}
      {showCreateForm && (
        <View className="bg-white mx-4 mt-4 rounded-2xl shadow-lg p-4">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Criar Novo Torneio
          </Text>
          <TextInput
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
            placeholder="Nome do torneio"
            value={newTournamentName}
            onChangeText={setNewTournamentName}
          />
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={createTournament}
              className="flex-1 bg-cbf-blue py-3 rounded-xl"
            >
              <Text className="text-white font-bold text-center">Criar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowCreateForm(false)}
              className="flex-1 bg-gray-200 py-3 rounded-xl"
            >
              <Text className="text-gray-700 font-semibold text-center">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Tournaments List */}
      <ScrollView className="flex-1 px-4 py-4">
        {tournaments.map((tournament) => (
          <TouchableOpacity
            key={tournament.id}
            className="bg-white rounded-2xl shadow-lg mb-4 p-4"
          >
            {/* Tournament Header */}
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-gray-800 font-bold text-lg flex-1">
                {tournament.name}
              </Text>
              <View className={`px-3 py-1 rounded-full border-2 ${getStatusColor(tournament.status)}`}>
                <Text className={`font-bold text-xs ${getStatusColor(tournament.status).split(' ')[2]}`}>
                  {getStatusLabel(tournament.status)}
                </Text>
              </View>
            </View>

            {/* Tournament Info */}
            <View className="mb-3">
              <View className="flex-row items-center mb-2">
                <Ionicons name="calendar" size={16} color="#6B7280" />
                <Text className="text-gray-600 text-sm ml-2">
                  {new Date(tournament.startDate).toLocaleDateString('pt-BR')} - {new Date(tournament.endDate).toLocaleDateString('pt-BR')}
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="people" size={16} color="#6B7280" />
                <Text className="text-gray-600 text-sm ml-2">
                  {tournament.teams.length} times participantes
                </Text>
              </View>
            </View>

            {/* Teams Preview */}
            {tournament.teams.length > 0 && (
              <View className="mb-3">
                <Text className="text-gray-700 font-semibold text-sm mb-2">
                  Times Participantes:
                </Text>
                <View className="flex-row flex-wrap">
                  {tournament.teams.slice(0, 4).map((team, index) => (
                    <View
                      key={index}
                      className="bg-cbf-blue/10 px-2 py-1 rounded-full mr-2 mb-1"
                    >
                      <Text className="text-cbf-blue text-xs font-medium">
                        {team}
                      </Text>
                    </View>
                  ))}
                  {tournament.teams.length > 4 && (
                    <View className="bg-gray-100 px-2 py-1 rounded-full">
                      <Text className="text-gray-600 text-xs font-medium">
                        +{tournament.teams.length - 4} mais
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )}

            {/* Actions */}
            <View className="flex-row space-x-3">
              <TouchableOpacity className="flex-1 bg-cbf-blue py-3 rounded-xl">
                <Text className="text-white font-bold text-center">Ver Detalhes</Text>
              </TouchableOpacity>
              {tournament.status === 'active' && (
                <TouchableOpacity className="flex-1 bg-cbf-green py-3 rounded-xl">
                  <Text className="text-white font-bold text-center">Gerenciar</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        ))}

        {tournaments.length === 0 && (
          <View className="items-center py-12">
            <Ionicons name="trophy" size={48} color="#9CA3AF" />
            <Text className="text-gray-500 text-lg font-semibold mt-4">
              Nenhum torneio encontrado
            </Text>
            <Text className="text-gray-400 text-center mt-2">
              Crie seu primeiro torneio para começar
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
