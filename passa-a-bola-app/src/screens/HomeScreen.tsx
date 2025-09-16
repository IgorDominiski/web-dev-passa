import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const highlights = [
    {
      id: 1,
      title: "É FESTA! Bastidores do título na Copa América",
      tag: "Seleção Feminina",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=225&fit=crop",
    },
    {
      id: 2,
      title: "Clássico define líder do Brasileirão Feminino",
      tag: "Brasileirão",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=225&fit=crop",
    },
    {
      id: 3,
      title: "Os 10 maiores públicos do futebol feminino no Brasil",
      tag: "Torcida",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop",
    },
    {
      id: 4,
      title: "VAR analisado: os lances mais polêmicos",
      tag: "Tecnologia",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=225&fit=crop",
    },
  ];

  const shortcuts = [
    { id: 1, title: "Times", icon: "people", color: "bg-cbf-blue" },
    { id: 2, title: "Jogos", icon: "football", color: "bg-cbf-green" },
    { id: 3, title: "Torneios", icon: "trophy", color: "bg-cbf-yellow" },
    { id: 4, title: "Comunidade", icon: "chatbubbles", color: "bg-cbf-purple" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="bg-gradient-to-br from-cbf-blue via-cbf-purple to-cbf-green px-6 py-8">
          <View className="items-center">
            <Text className="text-white text-3xl font-bold mb-2">
              Passa a Bola
            </Text>
            <Text className="text-white text-lg opacity-90 mb-4 text-center">
              O futebol feminino brasileiro em destaque
            </Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full">
                <Text className="text-white font-semibold">Ver Jogos</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-full">
                <Text className="text-white font-semibold">Times</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Shortcuts Section */}
        <View className="px-6 py-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            Navegação Rápida
          </Text>
          <Text className="text-gray-600 mb-6">
            Acesse rapidamente as principais seções do app
          </Text>
          
          <View className="flex-row flex-wrap justify-between">
            {shortcuts.map((shortcut) => (
              <TouchableOpacity
                key={shortcut.id}
                className={`${shortcut.color} w-[48%] p-6 rounded-2xl mb-4 items-center shadow-lg`}
                style={{ minHeight: 120 }}
              >
                <Ionicons 
                  name={shortcut.icon as any} 
                  size={32} 
                  color="white" 
                  className="mb-3"
                />
                <Text className="text-white font-bold text-lg text-center">
                  {shortcut.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Highlights Section */}
        <View className="px-6 py-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4">
            Destaques
          </Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {highlights.map((highlight) => (
              <TouchableOpacity
                key={highlight.id}
                className="bg-white rounded-2xl shadow-lg mr-4 overflow-hidden"
                style={{ width: width * 0.8 }}
              >
                <Image
                  source={{ uri: highlight.image }}
                  className="w-full h-48"
                  resizeMode="cover"
                />
                <View className="p-4">
                  <View className="bg-cbf-green px-3 py-1 rounded-full self-start mb-3">
                    <Text className="text-white text-xs font-bold">
                      {highlight.tag}
                    </Text>
                  </View>
                  <Text className="text-gray-800 font-bold text-lg leading-6">
                    {highlight.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* CBF TV Section */}
        <View className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-8">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-white text-2xl font-bold">
              Podcast Passa a Bola
            </Text>
            <TouchableOpacity className="bg-red-600 px-4 py-2 rounded-full flex-row items-center">
              <Ionicons name="logo-youtube" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Acessar</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {[1, 2, 3].map((item) => (
              <TouchableOpacity
                key={item}
                className="bg-white/10 rounded-2xl mr-4 overflow-hidden"
                style={{ width: width * 0.7 }}
              >
                <Image
                  source={{ uri: `https://images.unsplash.com/photo-${1459865264687 + item}?w=400&h=225&fit=crop` }}
                  className="w-full h-40"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/30 items-center justify-center">
                  <View className="bg-white/20 rounded-full p-4">
                    <Ionicons name="play" size={32} color="white" />
                  </View>
                </View>
                <View className="p-4">
                  <Text className="text-white font-bold text-lg">
                    Bastidores da Seleção Feminina
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
