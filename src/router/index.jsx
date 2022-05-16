import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Video from '../pages/Video';
import Login from '../pages/Login';
import SearchHistory from '../pages/SearchHistory';
import About from '../pages/About';
import WatchLater from '../pages/WatchLater';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import LikedVideos from '../pages/LikedVideos';
import WatchedVideos from '../pages/WatchedVideos';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/search-history" element={<SearchHistory />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/watched-videos" element={<WatchedVideos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
