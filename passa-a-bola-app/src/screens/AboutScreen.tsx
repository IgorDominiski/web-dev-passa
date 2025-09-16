import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  const values = [
    {
      icon: '⚽',
      title: 'Paixão pelo Futebol',
      description: 'Promovemos o futebol feminino com amor e dedicação',
    },
    {
      icon: '🤝',
      title: 'União',
      description: 'Conectamos fãs, atletas e profissionais do esporte',
    },
    {
      icon: '📈',
      title: 'Crescimento',
      description: 'Impulsionamos o desenvolvimento do futebol feminino',
    },
    {
      icon: '🌟',
      title: 'Excelência',
      description: 'Buscamos sempre a melhor qualidade em tudo que fazemos',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'logo-instagram',
      url: 'https://instagram.com/passabola',
      color: 'bg-pink-500',
    },
    {
      name: 'YouTube',
      icon: 'logo-youtube',
      url: 'https://youtube.com/@passabola',
      color: 'bg-red-500',
    },
    {
      name: 'Twitter',
      icon: 'logo-twitter',
      url: 'https://twitter.com/passabola',
      color: 'bg-blue-400',
    },
    {
      name: 'Facebook',
      icon: 'logo-facebook',
      url: 'https://facebook.com/passabola',
      color: 'bg-blue-600',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="bg-gradient-to-br from-cbf-blue via-cbf-purple to-cbf-green px-6 py-12">
          <View className="items-center">
            <View className="bg-white/20 rounded-3xl p-6 mb-6 backdrop-blur-sm">
              <Text className="text-white text-4xl font-black text-center">
                Passa a Bola
              </Text>
            </View>
            <Text className="text-white text-xl font-semibold text-center mb-4 opacity-90">
              O futebol feminino brasileiro em destaque
            </Text>
            <Text className="text-white text-base text-center opacity-80 leading-6">
              Conectamos fãs, atletas e profissionais do futebol feminino, 
              promovendo o crescimento e a visibilidade do esporte no Brasil.
            </Text>
          </View>
        </View>

        {/* Mission Section */}
        <View className="px-6 py-8">
          <View className="bg-white rounded-3xl shadow-xl p-8 items-center">
            <View className="bg-cbf-blue/10 rounded-full p-4 mb-6">
              <Text className="text-4xl">🎯</Text>
            </View>
            <Text className="text-gray-800 text-2xl font-bold text-center mb-4">
              Nossa Missão
            </Text>
            <Text className="text-gray-600 text-base text-center leading-6">
              Ser a principal plataforma de futebol feminino no Brasil, 
              oferecendo conteúdo de qualidade, conectando a comunidade 
              esportiva e promovendo o crescimento sustentável do esporte.
            </Text>
          </View>
        </View>

        {/* Values Section */}
        <View className="px-6 py-8">
          <Text className="text-gray-800 text-2xl font-bold text-center mb-8">
            Nossos Valores
          </Text>
          
          <View className="flex-row flex-wrap justify-between">
            {values.map((value, index) => (
              <View
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 mb-4 w-[48%] items-center"
              >
                <Text className="text-3xl mb-3">{value.icon}</Text>
                <Text className="text-gray-800 font-bold text-lg text-center mb-2">
                  {value.title}
                </Text>
                <Text className="text-gray-600 text-sm text-center leading-5">
                  {value.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* History Section */}
        <View className="px-6 py-8">
          <View className="bg-white rounded-3xl shadow-xl p-8">
            <Text className="text-gray-800 text-2xl font-bold text-center mb-6">
              Nossa História
            </Text>
            <Text className="text-gray-600 text-base leading-6 mb-4">
              O Passa a Bola nasceu da paixão pelo futebol feminino brasileiro. 
              Fundado em 2020, nosso projeto começou como um blog simples, 
              mas rapidamente se transformou em uma plataforma completa.
            </Text>
            <Text className="text-gray-600 text-base leading-6 mb-4">
              Hoje, somos referência em conteúdo sobre futebol feminino, 
              oferecendo notícias, análises, estatísticas e muito mais. 
              Nossa missão é dar visibilidade ao esporte que amamos.
            </Text>
            <Text className="text-gray-600 text-base leading-6">
              Com uma equipe apaixonada e comprometida, continuamos 
              crescendo e evoluindo para melhor servir nossa comunidade.
            </Text>
          </View>
        </View>

        {/* Social Links */}
        <View className="px-6 py-8">
          <Text className="text-gray-800 text-2xl font-bold text-center mb-6">
            Siga-nos
          </Text>
          
          <View className="flex-row flex-wrap justify-between">
            {socialLinks.map((social, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openURL(social.url)}
                className={`${social.color} rounded-2xl p-6 mb-4 w-[48%] items-center`}
              >
                <Ionicons name={social.icon as any} size={32} color="white" />
                <Text className="text-white font-bold text-lg mt-2">
                  {social.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Contact Section */}
        <View className="px-6 py-8">
          <View className="bg-white rounded-3xl shadow-xl p-8">
            <Text className="text-gray-800 text-2xl font-bold text-center mb-6">
              Entre em Contato
            </Text>
            <View className="space-y-4">
              <View className="flex-row items-center">
                <Ionicons name="mail" size={20} color="#1e40af" />
                <Text className="text-gray-600 text-base ml-3">
                  contato@passabola.com.br
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="call" size={20} color="#1e40af" />
                <Text className="text-gray-600 text-base ml-3">
                  (11) 99999-9999
                </Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="location" size={20} color="#1e40af" />
                <Text className="text-gray-600 text-base ml-3">
                  São Paulo, SP - Brasil
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="bg-gray-800 px-6 py-8">
          <Text className="text-white text-center text-sm opacity-80">
            © 2025 Passa a Bola. Todos os direitos reservados.
          </Text>
          <Text className="text-white text-center text-xs opacity-60 mt-2">
            Feito com ❤️ para o futebol feminino brasileiro
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
