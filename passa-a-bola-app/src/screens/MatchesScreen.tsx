import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { matchesData } from '../data/matches';
import { Match } from '../types';

const { width } = Dimensions.get('window');

export default function MatchesScreen() {
  const [matches, setMatches] = useState<Match[]>(matchesData);
  const [filteredMatches, setFilteredMatches] = useState<Match[]>(matchesData);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [leagueFilter, setLeagueFilter] = useState<string>('all');
  const [refreshing, setRefreshing] = useState(false);

  const statusOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'live', label: 'Ao Vivo' },
    { value: 'scheduled', label: 'Agendados' },
    { value: 'finished', label: 'Finalizados' },
  ];

  const leagueOptions = [
    { value: 'all', label: 'Todas as Ligas' },
    { value: 'Brasileirão Feminino', label: 'Brasileirão' },
    { value: 'Copa América Feminina', label: 'Copa América' },
    { value: 'Amistoso Internacional', label: 'Amistosos' },
  ];

  useEffect(() => {
    filterMatches();
  }, [statusFilter, leagueFilter, matches]);

  const filterMatches = () => {
    let filtered = matches;
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(match => match.status === statusFilter);
    }
    
    if (leagueFilter !== 'all') {
      filtered = filtered.filter(match => match.league === leagueFilter);
    }
    
    setFilteredMatches(filtered);
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simular atualização
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const getLeagueIcon = (league: string) => {
    if (league.includes('Brasileirão')) return '🏆';
    if (league.includes('Copa América')) return '🌎';
    if (league.includes('Amistoso')) return '🤝';
    return '⚽';
  };

  const getTimeIcon = (status: string) => {
    if (status === 'live') return '🔴';
    if (status === 'scheduled') return '⏰';
    if (status === 'finished') return '✅';
    return '⏱️';
  };

  const formatTime = (iso: string) => {
    try {
      const date = new Date(iso);
      return date.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit'
      });
    } catch {
      return '';
    }
  };

  const getStatusLabel = (status: string) => {
    if (status === 'live') return 'Ao vivo';
    if (status === 'scheduled') return 'Agendado';
    if (status === 'finished') return 'Finalizado';
    return status;
  };

  const getStatusColor = (status: string) => {
    if (status === 'live') return 'bg-red-100 border-red-300';
    if (status === 'scheduled') return 'bg-blue-100 border-blue-300';
    if (status === 'finished') return 'bg-green-100 border-green-300';
    return 'bg-gray-100 border-gray-300';
  };

  const getStatusTextColor = (status: string) => {
    if (status === 'live') return 'text-red-700';
    if (status === 'scheduled') return 'text-blue-700';
    if (status === 'finished') return 'text-green-700';
    return 'text-gray-700';
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-gradient-to-r from-cbf-blue via-cbf-purple to-cbf-green px-6 py-6">
        <Text className="text-white text-2xl font-bold mb-2">
          Jogos
        </Text>
        <Text className="text-white text-base opacity-90 mb-4">
          Acompanhe os jogos do futebol feminino
        </Text>
        
        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          <View className="flex-row space-x-3">
            {statusOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => setStatusFilter(option.value)}
                className={`px-4 py-2 rounded-full border-2 ${
                  statusFilter === option.value
                    ? 'bg-white/30 border-white/50'
                    : 'bg-white/10 border-white/20'
                }`}
              >
                <Text className="text-white font-semibold text-sm">
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Matches List */}
      <ScrollView
        className="flex-1 px-4 py-4"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredMatches.map((match) => {
          const progress = match.status === 'live' 
            ? Math.min(100, Math.floor((match.minute / 90) * 100)) 
            : 0;

          return (
            <TouchableOpacity
              key={match.id}
              className="bg-white rounded-2xl shadow-lg mb-4 overflow-hidden"
            >
              {/* Match Header */}
              <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
                <View className="flex-row items-center">
                  <Text className="text-lg mr-2">{getLeagueIcon(match.league)}</Text>
                  <Text className="text-cbf-blue font-bold text-sm uppercase">
                    {match.league}
                    {match.stage && ` • ${match.stage}`}
                  </Text>
                </View>
                <View className={`px-3 py-1 rounded-full border-2 ${getStatusColor(match.status)}`}>
                  <Text className={`font-bold text-xs ${getStatusTextColor(match.status)}`}>
                    {getStatusLabel(match.status)}
                  </Text>
                </View>
              </View>

              {/* Live Progress Bar */}
              {match.status === 'live' && (
                <View className="h-1 bg-red-100 relative">
                  <View 
                    className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
                    style={{ width: `${progress}%` }}
                  />
                  <View className="absolute inset-0 items-center justify-center">
                    <Text className="text-xs font-bold text-white">
                      {match.minute}' - {progress}%
                    </Text>
                  </View>
                </View>
              )}

              {/* Teams and Score */}
              <View className="p-4">
                <View className="flex-row items-center justify-between">
                  {/* Teams Column */}
                  <View className="flex-1">
                    {/* Home Team */}
                    <View className="flex-row items-center mb-3 pb-3 border-b border-cbf-blue">
                      <Image
                        source={{ uri: match.homeTeam.logo }}
                        className="w-9 h-9 mr-3"
                        resizeMode="contain"
                      />
                      <Text className="text-gray-800 font-semibold text-base flex-1">
                        {match.homeTeam.name}
                      </Text>
                      <Text className="text-gray-500 text-sm">🏠</Text>
                    </View>
                    
                    {/* Away Team */}
                    <View className="flex-row items-center">
                      <Image
                        source={{ uri: match.awayTeam.logo }}
                        className="w-9 h-9 mr-3"
                        resizeMode="contain"
                      />
                      <Text className="text-gray-800 font-semibold text-base flex-1">
                        {match.awayTeam.name}
                      </Text>
                      <Text className="text-gray-500 text-sm">✈️</Text>
                    </View>
                  </View>

                  {/* Score Column */}
                  <View className="items-center justify-center ml-6">
                    <Text className="text-3xl font-black bg-gradient-to-r from-cbf-blue to-cbf-purple text-transparent bg-clip-text">
                      {match.score.home} - {match.score.away}
                    </Text>
                    {match.status === 'live' && (
                      <View className="flex-row items-center mt-1">
                        <View className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                        <Text className="text-red-500 text-xs font-bold">AO VIVO</Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>

              {/* Stats */}
              {match.stats && (
                <View className="px-4 pb-4">
                  <View className="bg-gray-50 rounded-xl p-3">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-gray-600 font-semibold text-sm">Posse</Text>
                      <Text className="text-gray-800 font-bold text-sm">
                        {match.stats.possession.home}% - {match.stats.possession.away}%
                      </Text>
                    </View>
                    <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <View className="h-full bg-gradient-to-r from-cbf-blue to-cbf-purple rounded-full" 
                            style={{ width: `${match.stats.possession.home}%` }} />
                    </View>
                    <View className="flex-row items-center justify-between mt-2">
                      <Text className="text-gray-600 font-semibold text-sm">Finalizações</Text>
                      <Text className="text-gray-800 font-bold text-sm">
                        {match.stats.shots.home} - {match.stats.shots.away}
                      </Text>
                    </View>
                  </View>
                </View>
              )}

              {/* Meta Info */}
              <View className="px-4 pb-4">
                <View className="flex-row flex-wrap">
                  <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2">
                    <Text className="text-sm mr-1">{getTimeIcon(match.status)}</Text>
                    <Text className="text-gray-600 text-xs font-medium">
                      {match.status === 'scheduled' 
                        ? `Início ${formatTime(match.startTime)}`
                        : match.status === 'live' 
                        ? `${match.minute}'`
                        : 'Final'
                      }
                    </Text>
                  </View>
                  <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2">
                    <Text className="text-sm mr-1">🏟️</Text>
                    <Text className="text-gray-600 text-xs font-medium">{match.venue}</Text>
                  </View>
                  {match.broadcasters.length > 0 && (
                    <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2">
                      <Text className="text-sm mr-1">📺</Text>
                      <Text className="text-gray-600 text-xs font-medium">
                        {match.broadcasters.join(', ')}
                      </Text>
                    </View>
                  )}
                  {match.referee && (
                    <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2">
                      <Text className="text-sm mr-1">👩‍⚖️</Text>
                      <Text className="text-gray-600 text-xs font-medium">{match.referee}</Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Last Event */}
              {match.lastEvent && (
                <View className="px-4 pb-4">
                  <View className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-3">
                    <Text className="text-gray-800 font-semibold text-sm">
                      Último evento: ⚽ {match.lastEvent.player} ({match.lastEvent.team}) aos {match.lastEvent.minute}'
                    </Text>
                  </View>
                </View>
              )}

              {/* Actions */}
              <View className="px-4 pb-4">
                <View className="flex-row space-x-3">
                  <TouchableOpacity className="flex-1 bg-gradient-to-r from-cbf-blue to-cbf-purple py-3 rounded-xl">
                    <Text className="text-white font-bold text-center">Ver Detalhes</Text>
                  </TouchableOpacity>
                  {match.status === 'live' && (
                    <TouchableOpacity className="flex-1 bg-gray-100 border border-gray-300 py-3 rounded-xl">
                      <Text className="text-gray-700 font-semibold text-center">Atualizações</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
