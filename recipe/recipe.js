// Recipe data
const recipes = [
    {
        id: 'chicken-salad',
        title: 'Indian-Style Chicken Salad',
        prepTime: 15,
        servings: 2,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        ingredients: [
            'Boiled/grilled chicken – 1 cup (shredded or chopped)',
            'Lettuce – 1 cup',
            'Cucumber – ½ cup, sliced',
            'Tomato – ½ cup, diced',
            'Onion – ¼ cup, sliced',
            'Yogurt – 2 tbsp (for dressing)',
            'Lemon juice – 1 tsp',
            'Salt, black pepper, chaat masala – to taste'
        ],
        instructions: [
            'Mix yogurt, lemon juice, salt, pepper, chaat masala to make dressing',
            'Toss all ingredients with dressing',
            'Chill and serve'
        ],
        timerType: 'Preparation'
    },
    {
        id: 'chocolate-icecream',
        title: 'No-Churn Chocolate Ice Cream',
        prepTime: 10,
        servings: 4,
        image: 'https://png.pngtree.com/background/20230519/original/pngtree-chocolate-ice-cream-with-mint-leaves-on-a-dark-black-background-picture-image_2663775.jpg',
        ingredients: [
            'Fresh cream – 1 cup (whipped)',
            'Condensed milk – ½ cup',
            'Cocoa powder – 2 tbsp',
            'Chocolate chips – optional'
        ],
        instructions: [
            'Mix condensed milk and cocoa',
            'Gently fold in whipped cream',
            'Add choco chips',
            'Freeze 6–8 hours',
            'Scoop and enjoy!'
        ],
        timerType: 'Freezing'
    },
    {
        id: 'hyderabadi-biryani',
        title: 'Hyderabadi Chicken Biryani',
        prepTime: 40,
        servings: 4,
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        ingredients: [
            'Basmati rice – 1.5 cups (soaked)',
            'Chicken – 500g (marinated in yogurt, spices)',
            'Fried onions – 1 cup',
            'Biryani masala – 2 tsp',
            'Mint, coriander, saffron milk – for layering'
        ],
        instructions: [
            'Marinate chicken',
            'Partially cook rice',
            'In a pot, layer chicken, rice, fried onions, herbs',
            'Add saffron milk',
            'Cook covered on low heat (dum) for 25–30 mins',
            'Serve with raita'
        ],
        timerType: 'Cooking'
    },
    {
        id: 'paneer-roll',
        title: 'Street-Style Paneer Roll',
        prepTime: 25,
        servings: 2,
        image: 'https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg',
        ingredients: [
            'Paneer – 200g, cubed',
            'Onion, capsicum – sliced',
            'Roti/wrap – 2',
            'Yogurt – 2 tbsp (for marination)',
            'Garam masala, red chili, salt',
            'Mint chutney or mayo – optional'
        ],
        instructions: [
            'Marinate paneer in yogurt + spices',
            'Sauté with veggies',
            'Heat roti, spread chutney',
            'Add filling, roll up',
            'Grill or toast and serve'
        ],
        timerType: 'Cooking'
    },
    {
        id: 'masala-pasta',
        title: 'Indian-Style Masala Pasta',
        prepTime: 20,
        servings: 2,
        image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        ingredients: [
            'Pasta – 1 cup (boiled)',
            'Onion, tomato, capsicum – chopped',
            'Ginger-garlic paste – 1 tsp',
            'Tomato ketchup – 2 tbsp',
            'Chili powder, garam masala – to taste'
        ],
        instructions: [
            'Sauté onion, add ginger-garlic paste, tomato, capsicum',
            'Add ketchup and spices',
            'Mix in pasta, toss well',
            'Garnish and serve'
        ],
        timerType: 'Cooking'
    },
    {
        id: 'pappu-avakaya',
        title: 'Andhra-Style pappu with Avakaya',
        prepTime: 25,
        servings: 3,
        image: 'https://telugu.cdn.zeenews.com/telugu/sites/default/files/Muddapappuavakaihome.jpg',
        ingredients: [
            'Toor dal – 1 cup',
            'Tomato – 1',
            'Green chilies – 2',
            'Mustard seeds, cumin, garlic, red chilies – for tempering',
            'Avakaya (mango pickle) – 2 tsp'
        ],
        instructions: [
            'Pressure cook dal with tomato, chilies, turmeric',
            'Mash and add salt',
            'Temper mustard seeds, cumin, garlic, dry chilies',
            'Mix into dal',
            'Serve with rice and avakaya'
        ],
        timerType: 'Cooking'
    },
    {
        id: 'rasugulla',
        title: 'Rasugulla (Soft Bengali Sweet)',
        prepTime: 30,
        cookTime: 15,
        servings: '4-5',
        image:'https://images.slurrp.com/prodarticles/x2mwyme30a.webp',
        ingredients: [
            'Full-fat milk – 1 liter',
            'Lemon juice or vinegar – 2 tbsp',
            'Sugar – 1.5 cups',
            'Water – 4 cups',
            'Cardamom pods – 2 (optional)',
            'Rose water – 1 tsp (optional)'
        ],
        instructions: [
            'Boil milk. Once boiling, add lemon juice/vinegar',
            'When curdled, strain using a muslin cloth',
            'Rinse and squeeze out water. Hang it for 30 mins',
            'Knead the chenna until smooth (8–10 mins)',
            'Roll into small crack-free balls',
            'In a deep pan, boil 4 cups water + sugar. Add cardamom',
            'Drop rasgullas gently and cover',
            'Cook for 10–15 mins on medium heat. Balls will double in size',
            'Add rose water and let them cool',
            'Serve chilled or at room temperature'
        ],
        timerType: 'Cooking'
    },
    {
        id: 'chepala-pulusu',
        title: 'Chepala Pulusu (Andhra-Style Spicy Fish Curry)',
        prepTime: 20,
        cookTime: 25,
        servings: 4,
        image: 'https://th.bing.com/th/id/R.8ce327d1df546e03023d2eabb70e1c08?rik=UYOdTWHGdJCCtw&pid=ImgRaw&r=0',
        ingredients: [
            'Fish (Rohu, Katla, or Seer) – 500g',
            'Tamarind – lemon-sized ball (soaked in warm water)',
            'Onion – 1 large, chopped',
            'Tomato – 1, chopped',
            'Green chilies – 2',
            'Garlic – 6 cloves',
            'Ginger – 1 inch',
            'Mustard seeds – ½ tsp',
            'Fenugreek seeds – ¼ tsp',
            'Curry leaves – a few',
            'Turmeric – ¼ tsp',
            'Red chili powder – 2 tsp',
            'Coriander powder – 1 tsp',
            'Salt – to taste',
            'Oil – 2 tbsp',
            'Water – 1 to 1½ cups'
        ],
        instructions: [
            'Extract thick tamarind juice',
            'Crush garlic and ginger into a paste',
            'Heat oil. Add mustard, fenugreek seeds, curry leaves',
            'Add onions, chilies, and sauté till golden',
            'Add ginger-garlic paste, then tomatoes. Cook till soft',
            'Add turmeric, red chili powder, coriander powder, salt',
            'Add tamarind extract + water. Boil for 5–7 mins',
            'Gently place fish in the curry',
            'Simmer for 15 mins. Dont stir. Cover and swirl pan lightly',
            'Let it rest for 15–30 mins before serving'
        ],
        timerType: 'Cooking'
    }
];

// DOM elements
const cardView = document.getElementById('card-view');
const recipeViews = document.getElementById('recipe-views');

// Timer functionality
const timers = {};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    generateRecipeCards();
    generateRecipeDetails();
    showCardView();
    
    // Add click event to all recipe cards
    document.querySelectorAll('.recipe-preview-card').forEach(card => {
        card.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-recipe');
            showRecipeDetail(recipeId);
        });
    });
});

// Generate recipe cards for the card view
function generateRecipeCards() {
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-preview-card';
        card.setAttribute('data-recipe', recipe.id);
        
        card.innerHTML = `
            <div class="preview-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="preview-content">
                <h2 class="preview-title">${recipe.title}</h2>
                <div class="preview-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.prepTime} mins</span>
                    <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
                </div>
            </div>
        `;
        
        cardView.appendChild(card);
    });
}

// Generate detailed recipe views
function generateRecipeDetails() {
    recipes.forEach((recipe, index) => {
        const timerId = index + 1;
        const totalTime = recipe.cookTime ? recipe.prepTime + recipe.cookTime : recipe.prepTime;
        
        const detailView = document.createElement('div');
        detailView.id = recipe.id;
        detailView.className = 'recipe-detail-view';
        
        detailView.innerHTML = `
            <button class="back-btn" onclick="showCardView()">
                <i class="fas fa-arrow-left"></i> Back to Recipes
            </button>
            <div class="recipe-card">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.title}">
                </div>
                <div class="recipe-content">
                    <h2 class="recipe-title">${recipe.title}</h2>
                    <div class="recipe-meta">
                        <span><i class="fas fa-clock"></i> Prep: ${recipe.prepTime} mins${recipe.cookTime ? ` | Cook: ${recipe.cookTime} mins` : ''}</span>
                        <span><i class="fas fa-utensils"></i> Servings: ${recipe.servings}</span>
                    </div>
                    
                    <h3>Ingredients:</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                    
                    <h3>Instructions:</h3>
                    <ol class="instructions-list" id="instructions-${recipe.id}">
                        ${recipe.instructions.map((inst, i) => 
                            `<li data-step="${i}">${inst}</li>`
                        ).join('')}
                    </ol>
                    
                    <div class="timer-container">
                        <h3>${recipe.timerType} Timer</h3>
                        <div class="timer-display" id="timer${timerId}">${formatTime(totalTime * 60)}</div>
                        <div class="timer-controls">
                            <button class="start-timer" data-timer="${timerId}" data-duration="${totalTime * 60}">
                                <i class="fas fa-play"></i> Start
                            </button>
                            <button class="pause-timer" data-timer="${timerId}" disabled>
                                <i class="fas fa-pause"></i> Pause
                            </button>
                            <button class="reset-timer" data-timer="${timerId}" data-duration="${totalTime * 60}">
                                <i class="fas fa-redo"></i> Reset
                            </button>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="download-btn" onclick="downloadRecipe('${recipe.id}')">
                            <i class="fas fa-download"></i> Download Recipe
                        </button>
                        <button class="print-btn" onclick="window.print()">
                            <i class="fas fa-print"></i> Print Recipe
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        recipeViews.appendChild(detailView);
    });
    
    // Add timer event listeners
    setupTimerControls();
    
    // Add click handlers for instruction steps
    recipes.forEach(recipe => {
        const instructionList = document.querySelector(`#instructions-${recipe.id}`);
        if (instructionList) {
            instructionList.addEventListener('click', function(e) {
                if (e.target.tagName === 'LI') {
                    e.target.classList.toggle('completed');
                }
            });
        }
    });
}

// Show the card view (grid of all recipes)
function showCardView() {
    cardView.style.display = 'grid';
    recipeViews.style.display = 'none';
}

// Show a specific recipe detail view
function showRecipeDetail(recipeId) {
    cardView.style.display = 'none';
    recipeViews.style.display = 'block';
    
    // Hide all recipe detail views
    document.querySelectorAll('.recipe-detail-view').forEach(view => {
        view.style.display = 'none';
    });
    
    // Show the selected recipe
    document.getElementById(recipeId).style.display = 'block';
}

// Setup timer controls
function setupTimerControls() {
    document.querySelectorAll('.start-timer').forEach(button => {
        button.addEventListener('click', function() {
            const timerId = this.getAttribute('data-timer');
            const duration = parseInt(this.getAttribute('data-duration'));
            if (!timers[timerId]) {
                startCountdownTimer(timerId, duration);
                this.disabled = true;
                document.querySelector(`.pause-timer[data-timer="${timerId}"]`).disabled = false;
            }
        });
    });
    
    document.querySelectorAll('.pause-timer').forEach(button => {
        button.addEventListener('click', function() {
            const timerId = this.getAttribute('data-timer');
            if (timers[timerId] && !timers[timerId].paused) {
                pauseTimer(timerId);
                this.innerHTML = '<i class="fas fa-play"></i> Resume';
                document.querySelector(`.start-timer[data-timer="${timerId}"]`).disabled = false;
            } else if (timers[timerId] && timers[timerId].paused) {
                const remaining = getRemainingTimeInSeconds(timerId);
                resumeTimer(timerId, remaining);
                this.innerHTML = '<i class="fas fa-pause"></i> Pause';
                document.querySelector(`.start-timer[data-timer="${timerId}"]`).disabled = true;
            }
        });
    });
    
    document.querySelectorAll('.reset-timer').forEach(button => {
        button.addEventListener('click', function() {
            const timerId = this.getAttribute('data-timer');
            const duration = parseInt(this.getAttribute('data-duration'));
            resetTimer(timerId, duration);
            document.querySelector(`.start-timer[data-timer="${timerId}"]`).disabled = false;
            document.querySelector(`.pause-timer[data-timer="${timerId}"]`).disabled = true;
            document.querySelector(`.pause-timer[data-timer="${timerId}"]`).innerHTML = '<i class="fas fa-pause"></i> Pause';
        });
    });
}

// Start a countdown timer
function startCountdownTimer(timerId, duration) {
    const display = document.getElementById(`timer${timerId}`);
    let timeLeft = duration;
    
    // Initial display
    display.textContent = formatTime(timeLeft);
    
    timers[timerId] = {
        interval: setInterval(() => {
            timeLeft--;
            
            if (timeLeft <= 0) {
                clearInterval(timers[timerId].interval);
                display.textContent = "00:00";
                // You could add an alert or sound here when timer completes
                return;
            }
            
            display.textContent = formatTime(timeLeft);
        }, 1000),
        paused: false,
        remaining: timeLeft
    };
}

// Pause a timer
function pauseTimer(timerId) {
    if (timers[timerId]) {
        clearInterval(timers[timerId].interval);
        timers[timerId].paused = true;
        timers[timerId].remaining = getRemainingTimeInSeconds(timerId);
    }
}

// Resume a paused timer
function resumeTimer(timerId, remaining) {
    if (timers[timerId] && timers[timerId].paused) {
        const display = document.getElementById(`timer${timerId}`);
        
        timers[timerId].interval = setInterval(() => {
            remaining--;
            
            if (remaining <= 0) {
                clearInterval(timers[timerId].interval);
                display.textContent = "00:00";
                return;
            }
            
            display.textContent = formatTime(remaining);
        }, 1000);
        timers[timerId].paused = false;
    }
}

// Reset a timer
function resetTimer(timerId, duration) {
    if (timers[timerId]) {
        clearInterval(timers[timerId].interval);
        delete timers[timerId];
    }
    document.getElementById(`timer${timerId}`).textContent = formatTime(duration);
}

// Get remaining time in seconds from display
function getRemainingTimeInSeconds(timerId) {
    const display = document.getElementById(`timer${timerId}`);
    const time = display.textContent.split(':');
    const minutes = parseInt(time[0]);
    const seconds = parseInt(time[1]);
    return (minutes * 60) + seconds;
}

// Format time from seconds to MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
}

// Download recipe functionality
function downloadRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const recipeView = document.getElementById(recipeId);
    const recipeCard = recipeView.querySelector('.recipe-card');
    const recipeTitle = recipe.title;
    const recipeContent = recipeCard.innerHTML;
    
    const blob = new Blob([`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${recipeTitle}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .recipe-card { max-width: 600px; margin: 0 auto; }
                .recipe-image img { width: 100%; height: auto; }
                .recipe-title { color: #e63946; }
                .recipe-meta { display: flex; justify-content: space-between; }
                .ingredients-list, .instructions-list { padding-left: 20px; }
                .back-btn { display: none; }
                .instructions-list li.completed { 
                    background-color: #e8f5e9;
                    text-decoration: line-through;
                    color: #666;
                }
                .instructions-list li.completed::before {
                    content: "✓ ";
                    color: #2e7d32;
                }
            </style>
        </head>
        <body>
            <div class="recipe-card">
                ${recipeContent}
            </div>
        </body>
        </html>
    `], { type: 'text/html' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${recipeId}-recipe.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}