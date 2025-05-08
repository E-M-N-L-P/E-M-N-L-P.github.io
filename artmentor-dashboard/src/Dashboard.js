import React, { useState } from 'react';
import './index.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Slider } from "./components/ui/slider";
import { ChevronDown, ChevronUp } from 'lucide-react'
import ArtMentorHeader from './ArtMentorHeader';  // 假设您将新组件保存为ArtMentorHeader.js

const entityData = [
  { name: 'Accuracy', value: 0.833 },
  { name: 'Precision', value: 0.935 },
  { name: 'Recall', value: 0.836 },
  { name: 'F1 Score', value: 0.881 },
];

const styleRecognitionData = [
  { name: 'Correct', value: 80 },
  { name: 'Incorrect', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const textAcceptanceData = [
  { dimension: 'Realism', TMR: 0.881, TS: 0.992 },
  { dimension: 'Deformation', TMR: 0.882, TS: 0.997 },
  { dimension: 'Imagination', TMR: 0.875, TS: 0.978 },
  { dimension: 'CR', TMR: 0.971, TS: 0.995 },
  { dimension: 'CC', TMR: 0.969, TS: 0.995 },
    { dimension: 'LC', TMR: 0.957, TS: 0.998 },
    { dimension: 'LT', TMR: 0.978, TS: 0.986 },
    { dimension: 'PO', TMR: 0.964, TS: 0.993 },
    { dimension: 'Transformation', TMR: 0.956, TS: 0.999 },
];

const scoringData = [
  { dimension: 'Realism', GPT4o: 4.2, ArtTeacher: 4.5 },
  { dimension: 'Deformation', GPT4o: 3.8, ArtTeacher: 3.5 },
  { dimension: 'Imagination', GPT4o: 4.5, ArtTeacher: 4.0 },
  { dimension: 'Color Richness', GPT4o: 4.1, ArtTeacher: 4.3 },
  { dimension: 'Color Contrast', GPT4o: 3.9, ArtTeacher: 4.1 },
  { dimension: 'Line Combination', GPT4o: 3.7, ArtTeacher: 3.9 },
  { dimension: 'Line Texture', GPT4o: 4.0, ArtTeacher: 3.8 },
  { dimension: 'Picture Organization', GPT4o: 4.3, ArtTeacher: 4.4 },
  { dimension: 'Transformation', GPT4o: 3.6, ArtTeacher: 3.9 },
];

const Dashboard = () => {
const [activeTab, setActiveTab] = useState('results');
  const [activeSection, setActiveSection] = useState('');
  const [sliderValue, setSliderValue] = useState([50]);

const [activeSections, setActiveSections] = useState(['Key Findings', 'Entity Recognition Performance', 'Art Style Recognition Accuracy', 'Text Acceptance Metrics', 'Scoring Comparison: GPT-4o vs Art Teachers']);

const toggleSection = (section) => {
  setActiveSections(prev =>
    prev.includes(section)
      ? prev.filter(s => s !== section)
      : [...prev, section]
  );
};
const Section = ({ title, content }) => (
  <Card className="mb-4">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toggleSection(title)}
      >
        {activeSections.includes(title) ? <ChevronUp /> : <ChevronDown />}
      </Button>
    </CardHeader>
    {activeSections.includes(title) && (
      <CardContent>
        <p className="text-xs text-muted-foreground">{content}</p>
      </CardContent>
    )}
  </Card>
);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
         <ArtMentorHeader />
      <div className="max-w-7xl mx-auto">
       
      <div className="flex justify-center flex-wrap gap-4 mb-8">
     
          {/*<Button */}
          {/*  onClick={() => setActiveTab('overview')}*/}
          {/*  variant={activeTab === 'overview' ? 'default' : 'outline'}*/}
          {/*>*/}
          {/*  Overview*/}
          {/*</Button>*/}
          {/*<Button */}
          {/*  onClick={() => setActiveTab('methodology')}*/}
          {/*  variant={activeTab === 'methodology' ? 'default' : 'outline'}*/}
          {/*>*/}
          {/*  Methodology*/}
          {/*</Button>*/}
          <Button 
            onClick={() => setActiveTab('results')}
            variant={activeTab === 'results' ? 'default' : 'outline'}
          >
            Results
          </Button>
        </div>
  
        <div className="space-y-8">
          {/* 这里保留原有的 tab 内容代码 */}
          {activeTab === 'overview' && (
        <>
          <Section
            title="Abstract"
            content="This paper proposes ArtMentor, a space that combines a dataset and three systems to enhance MLLM evaluations. It documents 380 sessions with five art teachers, assessing artworks across nine critical dimensions."
          />
         <Section
  title="Introduction"
  content={
    <>
      <p>The paper discusses the challenges faced by Multimodal Large Language Models (MLLMs) in artwork evaluation and proposes a new methodology using process-oriented data for more effective evaluation.</p>
      
      {/* 嵌入 PDF 文件 */}
      <iframe
        src="/pdf/Interface_Design1.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Interface Design PDF"
      />
    </>
  }
/>

          <Section
            title="Key Contributions"
            content="1. Introduction of ArtMentor space. 2. Development of comprehensive evaluation metrics. 3. Identification of underperforming roles and proposed methods for enhancement."
          />
        </>
      )}

      {activeTab === 'methodology' && (
        <>
          <Section
            title="Data Collection"
            content="The study involved 5 art teachers evaluating 20 artworks across 9 dimensions, resulting in 380 evaluation sessions."
          />
          <Section
            title="Evaluation Metrics"
            content="The study used metrics such as Entity Classification Metrics, Art Style Metrics, Score Acceptance Metrics, and Text Acceptance Metrics to evaluate MLLM performance."
          />
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Interactivity Level</CardTitle>
            </CardHeader>
            <CardContent>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={setSliderValue}
              />
              <p className="mt-2">Current interactivity level: {sliderValue}%</p>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab === 'results' && (
        <>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Entity Recognition Performance</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={300}>
  <BarChart data={entityData}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
    <XAxis dataKey="name" tick={{fill: '#4b5563'}} />
    <YAxis tick={{fill: '#4b5563'}} />
    <Tooltip contentStyle={{backgroundColor: '#ffffff', borderColor: '#e5e7eb'}} />
    <Legend wrapperStyle={{paddingTop: '20px'}} />
    <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
  </BarChart>
</ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Art Style Recognition Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={styleRecognitionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {styleRecognitionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Text Acceptance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={textAcceptanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dimension" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="TMR" stroke="#8884d8" />
                  <Line type="monotone" dataKey="TS" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Scoring Comparison: GPT-4o vs Art Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart outerRadius={150} data={scoringData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="dimension" />
                  <PolarRadiusAxis angle={30} domain={[0, 5]} />
                  <Radar name="GPT-4o" dataKey="GPT4o" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Art Teacher" dataKey="ArtTeacher" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/*<Section*/}
          {/*  title="Key Findings"*/}
          {/*  content="1. GPT-4o demonstrates robust art style recognition capability with 80% Art Style Sensitivity. 2. The model shows high precision in entity recognition but tends to over-recognize entities. 3. Review generation outperformed suggestion generation in terms of alignment with human expectations. 4. Scoring comparison reveals close alignment between GPT-4o and art teachers across most dimensions, with slight variations in specific areas."*/}
          {/*/>*/}
        </>
      )}
    
        </div>
      </div>
    </div>
  )};

  
export default Dashboard;