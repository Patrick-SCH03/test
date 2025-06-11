
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Award, Phone, Mail, MapPin, Star, Users, Truck } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "프리미엄 시리즈",
      description: "최고급 소재로 제작된 프리미엄 제품",
      features: ["초박형 디자인", "자연스러운 감촉", "안전성 검증"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      name: "스탠다드 시리즈",
      description: "믿을 수 있는 품질의 표준 제품",
      features: ["검증된 안전성", "편안한 착용감", "합리적 가격"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      name: "센서티브 시리즈",
      description: "민감한 피부를 위한 특별 제작",
      features: ["무첨가 소재", "알레르기 테스트", "순한 성분"],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    }
  ];

  const stats = [
    { icon: Users, value: "10만+", label: "만족한 고객" },
    { icon: Award, value: "15년", label: "업계 경험" },
    { icon: Shield, value: "100%", label: "안전성 보장" },
    { icon: Truck, value: "24시간", label: "빠른 배송" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  유지훈 헬스케어
                </h1>
                <p className="text-sm text-muted-foreground">안전한 선택, 건강한 미래</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-blue-600 transition-colors font-medium">홈</a>
              <a href="#products" className="text-foreground hover:text-blue-600 transition-colors font-medium">제품</a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors font-medium">회사소개</a>
              <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors font-medium">연락처</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              문의하기
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            🏆 업계 최고 품질 인증
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            안전하고 신뢰할 수 있는
            <br />프리미엄 헬스케어 제품
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            15년간 축적된 전문 기술과 엄격한 품질 관리를 통해 
            고객의 건강과 안전을 최우선으로 하는 제품을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg">
              제품 카탈로그 보기
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
              무료 상담 받기
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="w-12 h-12 mb-4 opacity-90" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              💎 프리미엄 제품라인
            </Badge>
            <h3 className="text-4xl font-bold mb-6">다양한 제품 시리즈</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              고객의 다양한 니즈에 맞춘 프리미엄 제품군을 제공합니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${
                  activeProduct === index ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                }`}
                onClick={() => setActiveProduct(index)}
              >
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700 border-green-200">
                🌟 회사 소개
              </Badge>
              <h3 className="text-4xl font-bold mb-6">유지훈 헬스케어</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                2009년 설립된 유지훈 헬스케어는 고품질 콘돔 제조 및 유통 전문 기업입니다. 
                우리는 최첨단 기술과 엄격한 품질 관리 시스템을 통해 안전하고 신뢰할 수 있는 
                제품을 생산하고 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span>ISO 9001 품질경영시스템 인증</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span>FDA 승인 및 CE 마크 획득</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-blue-600 mr-3" />
                  <span>고객 만족도 98% 달성</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">15년의 신뢰</h4>
                  <p className="text-gray-600">업계 최고의 품질과 서비스</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              📞 연락처
            </Badge>
            <h3 className="text-4xl font-bold mb-6">문의하기</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              궁금한 점이 있으시면 언제든지 연락 주세요. 전문 상담원이 친절히 안내해드립니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">전화 문의</h4>
              <p className="text-muted-foreground mb-4">평일 9:00 - 18:00</p>
              <p className="text-lg font-semibold text-blue-600">02-1234-5678</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">이메일</h4>
              <p className="text-muted-foreground mb-4">24시간 접수 가능</p>
              <p className="text-lg font-semibold text-blue-600">info@jihun-health.co.kr</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">본사 위치</h4>
              <p className="text-muted-foreground mb-4">서울특별시 강남구</p>
              <p className="text-lg font-semibold text-blue-600">테헤란로 123길 45</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">유지훈 헬스케어</h4>
                  <p className="text-sm text-gray-300">안전한 선택, 건강한 미래</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                고객의 건강과 안전을 최우선으로 하는 프리미엄 헬스케어 제품 전문 기업입니다.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">제품</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">프리미엄 시리즈</a></li>
                <li><a href="#" className="hover:text-white transition-colors">스탠다드 시리즈</a></li>
                <li><a href="#" className="hover:text-white transition-colors">센서티브 시리즈</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">회사</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용 정보</a></li>
                <li><a href="#" className="hover:text-white transition-colors">뉴스</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">고객 지원</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 유지훈 헬스케어. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
