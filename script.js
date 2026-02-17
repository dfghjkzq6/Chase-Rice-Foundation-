<form id="contact-form" class="space-y-6">

    <!-- Hidden metadata -->
    <input type="hidden" name="_subject" value="New Chase Rice Foundation Inquiry">
    <input type="hidden" name="_captcha" value="false">

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="space-y-2">
            <label for="name" class="text-sm font-medium">Full Name</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
        </div>

        <div class="space-y-2">
            <label for="email" class="text-sm font-medium">Email Address</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="john@example.com"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
        </div>
    </div>

    <div class="space-y-2">
        <label for="donation" class="text-sm font-medium">Donation Interest</label>
        <select 
            id="donation" 
            name="donation"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
            <option value="small">Small Contribution ($1-$100)</option>
            <option value="medium">Medium Contribution ($100-$1,000)</option>
            <option value="large">Large Contribution ($1,000+)</option>
            <option value="other" selected>Other / Not Sure Yet</option>
        </select>
    </div>

    <div class="space-y-2">
        <label for="message" class="text-sm font-medium">Message</label>
        <textarea 
            id="message" 
            name="message" 
            required 
            rows="4"
            placeholder="How can you help?"
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        ></textarea>
    </div>

    <button 
        type="submit"
        class="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 h-11"
    >
        Send Message
    </button>

    <p class="text-xs text-center text-muted-foreground">
        We respect your privacy. Your information is safe with us.
    </p>

</form>
