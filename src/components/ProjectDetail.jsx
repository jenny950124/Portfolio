import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

import fmpImage from '../assets/work1.jpg';
import lwdImage from '../assets/work2.jpg';
import homerImage from '../assets/work3.jpg';
import saveenergy from '../assets/work4.jpg';

import fmp2 from '../assets/fmp/fmp2.jpg';
import fmp3 from '../assets/fmp/fmp3.jpg';
import fmp4 from '../assets/fmp/fmp4.jpg';
import fmp5 from '../assets/fmp/fmp5.jpg';
import fmp6 from '../assets/fmp/fmp6.jpg';
import fmp7 from '../assets/fmp/fmp7.jpg';
import fmp8 from '../assets/fmp/fmp8.jpg';
import fmp9 from '../assets/fmp/fmp9.jpg';
import fmp10 from '../assets/fmp/fmp10.jpg';
import fmp11 from '../assets/fmp/fmp11.jpg';
import fmp12 from '../assets/fmp/fmp12.jpg';
import fmp13 from '../assets/fmp/fmp13.jpg';
import fmp14 from '../assets/fmp/fmp14.jpg';
import fmp15 from '../assets/fmp/fmp15.jpg';

import gps2 from '../assets/gps/gps2.jpg';
import gps3 from '../assets/gps/gps3.jpg';
import gps4 from '../assets/gps/gps4.jpg';
import gps5 from '../assets/gps/gps5.jpg';
import gps6 from '../assets/gps/gps6.jpg';
import gps7 from '../assets/gps/gps7.jpg';
import gps8 from '../assets/gps/gps8.jpg';
import gps9 from '../assets/gps/gps9.jpg';
import gps10 from '../assets/gps/gps10.jpg';
import gps11 from '../assets/gps/gps11.jpg';

import app2 from '../assets/app/app2.jpg';
import app3 from '../assets/app/app3.jpg';

import bc2 from '../assets/bc/bc2.jpg';
import bc3 from '../assets/bc/bc3.jpg';
import bc4 from '../assets/bc/bc4.jpg';
import bc5 from '../assets/bc/bc5.jpg';
import bc6 from '../assets/bc/bc6.jpg';


const projects = [
  {
    id: '1',
    title: 'Find My Park',
    image: fmpImage,
    description:
      'A GPS-based app that helps people find the nearest parks in busy cities, Whether you are looking for a quiet place to relax or a peaceful walk, this app guides you to nearby green spaces where you can sit back and unwind.',
    extras: [
      fmp2, fmp3, fmp4, fmp5, fmp6, fmp7, fmp8,
      fmp9, fmp10, fmp11, fmp12, fmp13, fmp14, fmp15,
    ],
  },
  {
    id: '2',
    title: 'Light Wins Dark',
    image: lwdImage,
    description:
      'An AI + GPS app designed to assist blind and visually impaired users in daily life. Users can simply ask questions like, “Light, do my socks match?” or “Light, is this milk expired?” The app uses the camera and voice to give helpful, accurate answers and support independence.',
    extras: [gps2, gps3, gps4, gps5, gps6, gps7, gps8, gps9, gps10, gps11],
  },
  {
    id: '3',
    title: 'Homer St Cafe',
    image: homerImage,
    description:
      'A website and app redesign for one of my favorite restaurants This project focuses on improving user experience, making it easy to explore the menu, book a table, and enjoy the vibe of Homer St Café both online and offline.',
    extras: [app2, app3],
  },
  {
    id: '4',
    title: 'Save Energy Earn Money',
    image: saveenergy,
    description:
      'This energy-saving app was inspired by a personal experience. While on vacation, I accidentally left the lights on at home—and came back to a surprisingly high electricity bill. This app helps users control lights remotely, track energy use, pay with Apple Wallet, and earn donation points by saving energy.',
    extras: [bc2, bc3, bc4, bc5, bc6],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // ✅ Force background white for this page
  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff';
    const root = document.getElementById('root');
    if (root) root.style.backgroundColor = '#ffffff';
    return () => {
      document.body.style.backgroundColor = '';
      if (root) root.style.backgroundColor = '';
    };
  }, []);

  if (!project) return <p style={{ padding: '2rem', textAlign: 'center' }}>Project not found</p>;

  return (
    <motion.div
      className="project-detail-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h2>

      <motion.p
        className="project-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {project.description}
      </motion.p>

      <motion.img
        src={project.image}
        alt={project.title}
        className="project-detail-image"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {project.extras && project.extras.length > 0 && (
        <div className="project-extra-section">
          {project.extras.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Section ${index + 1}`}
              className="project-detail-extra"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      )}

      {project.id === '3' && (
        <div className="figma-embed-wrapper">
          <iframe
            title="Homer St Cafe Prototype"
            className="figma-prototype"
            src="https://www.figma.com/proto/15aI1fl0qS2JwwWhnjm3Ze/Untitled?node-id=1-241&p=f&t=kiqAVxbWpaTGBaCW-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A240"
            allowFullScreen
          ></iframe>
        </div>
      )}

    </motion.div>
  );
};

export default ProjectDetail;
