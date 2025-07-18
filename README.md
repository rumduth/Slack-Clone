# Slack Clone - Real-time Chat Application

A modern, real-time chat application built with Node.js, Socket.IO, and a Discord-inspired UI design. This project recreates the core functionality of Slack with namespaces, rooms, and real-time messaging.

## 🚀 Features

- **Real-time messaging** with Socket.IO
- **Multiple namespaces** (Wiki, Mozilla, Linux)
- **Room-based chat** with public and private rooms
- **Direct messaging** capabilities
- **Modern Discord-inspired UI** with dark theme
- **Responsive design** for desktop and mobile
- **User presence indicators**
- **Message search functionality**
- **Smooth animations and transitions**

## 🛠️ Technologies Used

- **Backend:**

  - Node.js
  - Express.js
  - Socket.IO
  - JavaScript ES6+

- **Frontend:**
  - HTML5
  - CSS3 (Modern Flexbox/Grid)
  - Vanilla JavaScript
  - Font Awesome Icons
  - Bootstrap 5

## 📁 Project Structure

```
Chat App/
├── slackClone/
│   ├── slack.js                 # Main server file
│   ├── classes/
│   │   ├── Namespace.js         # Namespace class definition
│   │   └── Room.js              # Room class definition
│   ├── data/
│   │   └── namespaces.js        # Namespace data and configuration
│   └── public/
│       ├── slack.html           # Main chat interface
│       ├── layout.html          # Base layout template
│       ├── styles.css           # Modern CSS styling
│       ├── scripts.js           # Main client-side logic
│       ├── joinNs.js           # Namespace joining logic
│       └── joinRoom.js         # Room joining logic
├── package.json
├── package-lock.json
└── README.md
```

## 🎨 Design Features

### Modern UI Components

- **Gradient backgrounds** with professional color schemes
- **Glass-morphism effects** with backdrop blur
- **Smooth hover animations** and micro-interactions
- **Custom scrollbars** for better UX
- **Responsive layout** that adapts to all screen sizes

### Color Palette

- Primary: `#5865f2` (Discord Blurple)
- Background: `#36393f` to `#2f3136` gradients
- Text: `#ffffff` primary, `#dcddde` secondary
- Accent: `#72767d` muted text

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Chat App"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   cd slackClone
   node slack.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

## 🎮 Usage

### Joining Namespaces

1. Click on any namespace icon in the left sidebar
2. Available namespaces: Wiki, Mozilla, Linux
3. Each namespace has its own set of rooms and users

### Chatting in Rooms

1. Select a room from the rooms sidebar
2. Type your message in the input field at the bottom
3. Press Enter to send your message
4. Messages appear in real-time for all users in the room

### Direct Messages

1. Click on a user in the Direct Messages section
2. Start a private conversation
3. Messages are only visible to you and the recipient

### Search Messages

1. Use the search bar in the top-right corner
2. Search through message history in the current room
3. Results are highlighted and filtered in real-time

## 🔧 Configuration

### Adding New Namespaces

Edit `slackClone/data/namespaces.js` to add new namespaces:

```javascript
{
    id: 4,
    nsTitle: "Your Namespace",
    img: "path/to/your/image.png",
    endpoint: "/your-namespace"
}
```

### Customizing Rooms

Modify the rooms array in each namespace configuration:

```javascript
rooms: [
  {
    roomTitle: "Your Room",
    roomDescription: "Room description",
    privateRoom: false,
    historyVisible: true,
  },
];
```

## 🎨 CSS Architecture

The CSS is organized into logical sections:

- **Reset & Base Styles** - Normalize and base typography
- **Layout Components** - Container, flexbox layouts
- **UI Components** - Namespaces, rooms, chat panel
- **Interactive Elements** - Hover effects, animations
- **Responsive Design** - Mobile-first breakpoints
- **Utility Classes** - Reusable helper classes

### Key CSS Features

- CSS Custom Properties for easy theming
- Flexbox-based responsive layout
- Smooth transitions and animations
- Modern scrollbar styling
- Accessibility-focused design

## 📱 Responsive Design

The application is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

Mobile features include:

- Collapsible sidebar navigation
- Touch-friendly interface elements
- Optimized spacing and typography

## 🔒 Security Considerations

- Input sanitization for chat messages
- XSS protection
- Rate limiting for message sending
- Namespace-based access control

## 🚀 Performance Optimizations

- Efficient Socket.IO event handling
- CSS animations using GPU acceleration
- Optimized image loading
- Minimal DOM manipulation
- Smooth scrolling implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Socket.IO team for real-time communication
- Font Awesome for beautiful icons
- Bootstrap team for responsive utilities
- Discord for UI/UX inspiration

## 📞 Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Happy Chatting! 💬**
