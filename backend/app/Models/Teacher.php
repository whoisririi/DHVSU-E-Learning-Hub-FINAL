<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Teacher extends Authenticable implements JWTSubject
{
    use HasFactory, Notifiable;

    // Required methods for JWTSubject
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }


    protected $table = 'teachers';

    protected $fillable = [
        'id',
        'fn',
        'ln',
        'subjects',
        'email',
        'password'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Cast JSON fields to array automatically
    protected $casts = [
        'subjects' => 'array',
        'password' => 'hashed'
    ];

    public function subject()
    {
        return $this->belongsToMany(Subject::class, 'subject_code');
    }
}
